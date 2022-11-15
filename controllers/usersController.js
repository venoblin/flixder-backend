const { User } = require('../models')

const getUser = async (req, res) => {
  try {
    const { username } = req.params

    const user = await User.find({ username: username }).populate('profiles')

    return res.status(201).json({
      user
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)

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

module.exports = {
  getUser,
  createUser,
  deleteUser
}
