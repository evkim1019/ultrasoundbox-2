const router = require('express').Router()
const { models: { RuqBlock } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const blocks = await RuqBlock.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})

