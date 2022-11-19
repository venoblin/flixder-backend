const { User } = require('../models')
const middleware = require('../middleware')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    return res.status(201).json({
      users
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(id)

    return res.status(201).json({
      _id: user._id,
      email: user.email,
      profiles: user.profiles
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

    if (user && middleware.comparePassword(password, user.password)) {
      const payload = {
        id: user._id,
        email: user.email
      }

      const token = await middleware.createToken(payload)
      return res.status(201).json({ user: payload, token })
    }

    res.status(401).json({ error: 'Unauthorized' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const emailPresent = await User.findOne({ email: email })

    if (!emailPresent) {
      const hashed = await middleware.hashPassword(password)
      const user = await User.create({
        email: email,
        password: hashed
      })

      return res.status(201).json({
        email: user.email
      })
    }

    res.status(401).json({ error: 'Unauthorized' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  getUserById,
  registerUser,
  deleteUser,
  loginUser,
  getAllUsers,
  checkSession
}
