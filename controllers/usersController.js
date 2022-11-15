const { User } = require('../models')
const bcrypt = require('bcrypt')

const getUser = async (req, res) => {
  try {
    const { email } = req.params

    const user = await User.find({ email: email }).populate('profiles')

    return res.status(201).json({
      user
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const deletedUser = await User.findOneAndDelete({ _id: id })

    return res.status(201).json({ deletedUser })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })
    const validPassword = await bcrypt.compare(password, user.password)

    if (validPassword) {
      return res.status(201).json({ user })
    }

    throw 'Invalid email or password'
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const hashed = await bcrypt.hash(password, 12)
    const user = await User.create({
      email: email,
      password: hashed
    })

    return res.status(201).json({
      user
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getUser,
  registerUser,
  deleteUser,
  loginUser
}
