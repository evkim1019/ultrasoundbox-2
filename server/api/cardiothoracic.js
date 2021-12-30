const router = require('express').Router()
const { models: { CardioBlock } } = require('../db')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const blocks = await Block.findAll()
//     res.json(blocks)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
    const blocks = await CardioBlock.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})