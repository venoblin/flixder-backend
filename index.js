const express = require('express')
const db = require('./db')
const genresRoutes = require('./routes/genres')
const regionsRoutes = require('./routes/regions')
const profilesRoutes = require('./routes/profiles')
const moviesRoutes = require('./routes/movies')
const imagesRoutes = require('./routes/images')
const providersRoutes = require('./routes/providers')
const PORT = process.env.PORT || 3001
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/api/genres', genresRoutes)
app.use('/api/regions', regionsRoutes)
app.use('/api/profiles', profilesRoutes)
app.use('/api/movies', moviesRoutes)
app.use('/api/images', imagesRoutes)
app.use('/api/providers', providersRoutes)

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})
