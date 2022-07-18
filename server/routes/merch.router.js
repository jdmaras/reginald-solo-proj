const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const sendThatEmail = require("../../SendGrid/SendGrid");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET - merch to show in store TESTED - WORKS
router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("in merch route");
  const query = `
  SELECT * FROM merch  
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Error GETTING merch db`, err);
      res.sendStatus(500);
    });
});

//grab select id from database for the edit with :id placeholder
router.get("/:id", rejectUnauthenticated, (req, res) => {
  if (req.user.admin) {
    const sqlQuery = `
  SELECT *
  FROM "merch"
  WHERE id = $1
  `;
    //putting it in a bracket to nicely package the items
    const sqlParams = [req.params.id];
    pool
      .query(sqlQuery, sqlParams)
      .then((dbRes) => {
        // if there isn't anything to change, you get a 404
        if (dbRes.rows.length === 0) {
          res.sendStatus(404);
        } else {
          // this sends the 1 item when you put the [0]
          res.send(dbRes.rows[0]);
        }
      })
      .catch((err) => {
        console.log("Err in GET BY ID", err);
        res.sendStatus(500);
      });
  }
});

// this is grabbing what is in the cart to append
// router.get('/cart', (req, res) => {
//   const sqlQuery = `
//     SELECT *
//     FROM orders
//     WHERE user_id = $1
//   `
//   const sqlParams = [req.user.id]

//   pool.query(sqlQuery, sqlParams)
//     .then(dbRes => {
//       // when grabbing from db it is a row of info
//       res.send(dbRes.rows)
//     })
//     .catch(err => {
//       console.log('Failed to GET cart', err)
//     })
// })

// POST moving things into DB - TESTED - WORKS
router.post("/cart", rejectUnauthenticated, async (req, res) => {
  const sqlQuery = `
  INSERT INTO "orders"
  (user_id, product_id)
  VALUES ($1, $2);
  `;
  //the passport / session middleware is what makes you grab req.user
  try {
    //looping through all my items in the cart that are being sent
    for (let item of req.body.cart) {
      await pool.query(sqlQuery, [req.user.id, item.product_id]);
      //await doesn't need a .then because you're already waiting
    }
    //req.body.cart will have the items in your cart and you are sending those items through in the email of what they are buying
    sendThatEmail(req.body.cart, req.user);
  } catch (err) {
    console.log("this is an err", err);
    res.sendStatus(500);
  }
});

// Admin POST to add merch
router.post("/", rejectUnauthenticated, (req, res) => {
  if (req.user.admin) {
    const sqlQuery = `
  INSERT INTO "merch" 
  (img_url, product_name, product_type, size, price)
  VALUES ($1, $2, $3, $4, $5);
  `;
    const sqlParams = [
      req.body.img_url,
      req.body.product_name,
      req.body.product_type,
      req.body.size,
      req.body.price,
    ];
    pool
      .query(sqlQuery, sqlParams)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log("Failed POST in Admin MERCH post", err);
        res.sendStatus(500);
      });
  }
});

//Admin Delete route
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  console.log("req.params.id", req.params.id);
  if (req.user.admin) {
    const sqlQuery = `
  DELETE FROM "merch" 
  WHERE id = $1
  RETURNING *;
  `;
    //prepared statement
    const sqlParams = [req.params.id];
    pool
      .query(sqlQuery, sqlParams)
      .then((dbRes) => {
        if (dbRes.rows.length === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => {
        console.log("Err in DELETE", err);
        res.sendStatus(500);
      });
  }
});

// PUT route to put the 'edit' merch back into DB
router.put("/:id/edit", rejectUnauthenticated, (req, res) => {
  if (req.user.admin) {
    const sqlQuery = `
  UPDATE "merch"
  SET img_url = $2,
  product_name = $3,
  product_type = $4,
  size = $5,
  price = $6
  WHERE id = $1;
  `;
    const sqlParams = [
      req.params.id,
      req.body.img_url,
      req.body.product_name,
      req.body.product_type,
      req.body.size,
      req.body.price,
    ];
    pool
      .query(sqlQuery, sqlParams)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log("Failed PUT in EDIT axios", err);
        res.sendStatus(500);
      });
  }
});

module.exports = router;
