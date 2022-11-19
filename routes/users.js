const { Router } = require('express')
const router = Router()
const controller = require('../controllers/usersController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllUsers
)

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserById
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
)

router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)

module.exports = router
