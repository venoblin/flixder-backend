const { Router } = require('express')
const router = Router()
const controller = require('../controllers/usersController')

router.post('/', controller.createUser)

router.delete('/:id', controller.deleteUser)

module.exports = router
