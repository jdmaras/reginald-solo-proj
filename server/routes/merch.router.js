const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

// GET - merch to show in store TESTED - WORKS
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('in merch route')
  const query = `
  SELECT * FROM merch  
  `;
  pool.query(query)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log(`Error GETTING merch db`, err)
    res.sendStatus(500)
  })
});

//grab select id from database for the edit
router.get('/:id', rejectUnauthenticated, (req,res) => {
  if (req.user.admin) {
  const sqlQuery = `
  SELECT *
  FROM "merch"
  WHERE id = $1
  `
  const sqlParams = [
    req.params.id,
  ]
  pool.query(sqlQuery, sqlParams).then ((dbRes) => {
    if (dbRes.rows.length === 0) {
      res.sendStatus(404)
    } else{
      res.sendStatus(200)
    }
    })
    .catch((err) => {
      console.log('Err in DELETE', err)
      res.sendStatus(500)
    })}
})

// this is grabbing what is in the cart to append
router.get('/cart', (req, res) => {
  const sqlQuery = `
    SELECT *
    FROM orders
    WHERE user_id = $1
  `
  const sqlParams = [req.user.id]

  pool.query(sqlQuery, sqlParams)
    .then(dbRes => {
      // when grabbing from db it is a row of info
      res.send(dbRes.rows)
    })
    .catch(err => {
      console.log('Failed to GET cart', err)
    })
})

// POST moving things into carts - TESTED - WORKS
router.post('/cart', rejectUnauthenticated, (req, res) =>{

  console.log('req.body', req.body)
  const sqlQuery = `
  INSERT INTO "orders"
  (user_id, product_id, quantity)
  VALUES ($1, $2, $3);
  `
  //the passport / session middleware is what makes you grab req.user 
  const sqlParams = [
    req.user.id,
    req.body.product_id,
    req.body.quantity
  ]
  pool.query(sqlQuery, sqlParams)
  .then(dbRes => {
    res.sendStatus(201)
  })
  .catch(err => {
    console.log('error in POST adding to cart', err)
    res.sendStatus(500)
  });
})

// Admin POST to add merch
router.post('/', rejectUnauthenticated, (req, res) => {
   if (req.user.admin) {
  const sqlQuery = `
  INSERT INTO "merch" 
  (img_url, product_name, product_type, size, price)
  VALUES ($1, $2, $3, $4, $5);
  `
  const sqlParams = [
    req.body.img_url,
    req.body.product_name,
    req.body.product_type,
    req.body.size,
    req.body.price
  ]
  pool.query(sqlQuery, sqlParams)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Failed POST in Admin MERCH post', err);
    res.sendStatus(500);
  })
   }
});

//Admin Delete route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.admin) {
  const sqlQuery = `
  DELETE FROM "merch" 
  WHERE id = $1
  RETURNING *;
  `
  //prepared statement
  const sqlParams = [
    req.params.id,
  ]
  pool.query(sqlQuery, sqlParams).then ((dbRes) => {
    if (dbRes.rows.length === 0) {
      res.sendStatus(404)
    } else{
      res.sendStatus(200)
    }
    })
    .catch((err) => {
      console.log('Err in DELETE', err)
      res.sendStatus(500)
    })}
})

module.exports = router;
