const router = require('express').Router()
const { models: { Take } } = require('../db')
module.exports = router


router.get('/', async (req, res, next) => {
  const { userId } = req.query;
  try {
    const takes = await Take.findAll()
    res.json(takes)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   Take.create({
//     userId: req.body.userId,
//     cardioblockId: req.body.cardioblockId,
//     renalblockId: req.body.renalblockId,
//     wrong: req.body.wrong,
//     score: req.body.score,
//     count: req.body.count,
//   }).then(take => {
//     res.send(take);
//   }).catch(err => {
//     res.status(500).send('ERR => ' + err);
//   })
// })
router.post('/create', async (req, res, next) => {
  try {
    const newTake = await Take.create(req.body.newTake)
    res.send(newTake);
  } catch (err) {
    next(err);
  }
})