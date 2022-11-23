const { User } = require('../models')

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

    const user = await User.findById(id).populate({
      path: 'profiles',
      populate: [
        { path: 'profile_pic', model: 'Image' },
        { path: 'region', model: 'Region' },
        { path: 'providers', model: 'Provider' },
        { path: 'fav_genres', model: 'Genre' },
        { path: 'fav_movies', model: 'Movie' }
      ]
    })

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

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    return res.status(201).json({
      _id: updatedUser._id,
      email: updatedUser.email,
      profiles: updatedUser.profiles
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getUserById,
  deleteUser,
  getAllUsers,
  updateUser
}
