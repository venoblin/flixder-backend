const { Router } = require('express')
const router = Router()
const controller = require('../controllers/usersController')

router.delete('/:id', controller.deleteUser)

router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)

module.exports = router
