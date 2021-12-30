const router = require('express').Router()
const { models: { RenalBlock } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const blocks = await RenalBlock.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})