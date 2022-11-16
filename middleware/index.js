const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  const password = await bcrypt.hash(password, SALT_ROUNDS)
  return password
}

const comparePassword = async (password, storedPassword) => {
  const passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}

const createToken = (payload) => {
  const token = jwt.sign(payload, APP_SECRET)
  return token
}

const verifyToken = async (req, res, next) => {
  const { token } = res.locals
  try {
    const payload = jwt.verify(token, APP_SECRET)

    if (payload) {
      return next()
    }

    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (err) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]

    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (err) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
