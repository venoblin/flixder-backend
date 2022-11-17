require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, SALT_ROUNDS)
  return hash
}

const comparePassword = async (password, storedPassword) => {
  const match = await bcrypt.compare(password, storedPassword)
  return match
}

const createToken = (payload) => {
  const token = jwt.sign(payload, APP_SECRET)
  return token
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  try {
    const payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      res.locals = payload
      return next()
    }
    res.status(401).json({ status: 'Error', msg: 'Unauthorized' })
  } catch (err) {
    res.status(401).json({ status: 'Error', msg: "Can't verify token" })
  }
}

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorized'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (err) {
    res.status(401).json({ status: 'Error', msg: "Can't strip token" })
  }
}

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
