const { Router } = require('express')
const router = Router()
const controller = require('../controllers/usersController')
const middleware = require('../middleware')

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
)

router.post(
  '/register',
  middleware.stripToken,
  middleware.verifyToken,
  controller.registerUser
)
router.post(
  '/login',
  middleware.stripToken,
  middleware.verifyToken,
  controller.loginUser
)

module.exports = router
