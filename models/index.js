const mongoose = require('mongoose')
const userSchema = require('./users')
const profileSchema = require('./profiles')
const regionSchema = require('./regions')
const genreSchema = require('./genres')
const movieSchema = require('./movies')
const imageSchema = require('./images')
const providerSchema = require('./providers')

const User = mongoose.model('User', userSchema)
const Profile = mongoose.model('Profile', profileSchema)
const Region = mongoose.model('Region', regionSchema)
const Genre = mongoose.model('Genre', genreSchema)
const Movie = mongoose.model('Movie', movieSchema)
const Image = mongoose.model('Image', imageSchema)
const Provider = mongoose.model('Provider', providerSchema)

module.exports = {
  User,
  Profile,
  Region,
  Genre,
  Movie,
  Image,
  Provider
}
