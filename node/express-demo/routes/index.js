const express = require('express')
const router = express.Router()

router.get('/test/:id', (req, res, next) => {
  req.params
  res.send(req.params)
})

router.get('/t', (req, res, next) => {
  req.query
  res.send(req.query)
})
module.exports = router;