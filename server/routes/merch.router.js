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

// POST moving things into carts - TESTED - WORKS
router.post('/cart', rejectUnauthenticated, (req, res) =>{
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
router.post('/', (req, res) => {
  const sqlQuery = `
  INSERT INTO "merch" 
  (img_url, product_name, product_type, size, price)
  VALUES ($1, $2, $3, $4, $5);
  `
  const sqlParam = [
    req.body
  ]

});

module.exports = router;
