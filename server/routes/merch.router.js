const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//const { rejectUnauthenticated } = require('../modules/authentication-middleware')

// GET - merch to show in store
router.get('/', (req, res) => {
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
