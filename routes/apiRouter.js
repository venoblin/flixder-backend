const { Router } = require('express')
const router = Router()
const genresRoutes = require('./genres')
const regionsRoutes = require('./regions')
const profilesRoutes = require('./profiles')
const usersRoutes = require('./users')
const moviesRoutes = require('./movies')
const imagesRoutes = require('./images')
const providersRoutes = require('./providers')

router.use('/genres', genresRoutes)
router.use('/regions', regionsRoutes)
router.use('/users', usersRoutes)
router.use('/profiles', profilesRoutes)
router.use('/movies', moviesRoutes)
router.use('/images', imagesRoutes)
router.use('/providers', providersRoutes)

module.exports = router
