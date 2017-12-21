const express = require('express');
const router = express.Router();


router.post('/api/create', ((req, res) => {
  res.json('success')
}))

module.exports = router;