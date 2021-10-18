const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/categories', require('./categories'))
router.use('/cardiothoracic', require('./cardiothoracic'))
router.use('/renal', require('./renal'))
router.use('/efast', require('./efast'))
router.use('/ruq', require('./ruq'))
router.use('/takes', require('./takes'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
