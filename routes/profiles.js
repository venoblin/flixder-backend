const { Router } = require('express')
const router = Router()
const controller = require('../controllers/profilesController')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllProfiles
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createProfile
)

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getProfileById
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteProfile
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateProfile
)

module.exports = router
