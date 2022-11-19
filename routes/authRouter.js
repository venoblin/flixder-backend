const { Router } = require('express')
const router = Router()
const controller = require('../controllers/authController')
const middleware = require('../middleware')

router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)

module.exports = router
