const router = require('express').Router()
const { models: { EfastBlock } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const blocks = await EfastBlock.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})
