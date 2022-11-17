const { User } = require('../models')
const middleware = require('../middleware')

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
    const validPassword = await middleware.comparePassword(
      password,
      user.password
    )

    if (user && validPassword) {
      const payload = {
        id: user._id,
        email: user.email
      }
      const token = middleware.createToken(payload)

      return res.status(201).json({ user: payload, token })
    }

    return res.status(500).json({ error: 'Unauthorized' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const hashed = await middleware.hashPassword(password)
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
