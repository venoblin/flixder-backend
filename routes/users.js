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

module.exports = router
