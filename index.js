const express = require('express')
const cors = require('cors')
const db = require('./db')
const genresRoutes = require('./routes/genres')
const regionsRoutes = require('./routes/regions')
const profilesRoutes = require('./routes/profiles')
const usersRoutes = require('./routes/users')
const moviesRoutes = require('./routes/movies')
const imagesRoutes = require('./routes/images')
const providersRoutes = require('./routes/providers')
const PORT = process.env.PORT || 3001
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/genres', genresRoutes)
app.use('/api/regions', regionsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/profiles', profilesRoutes)
app.use('/api/movies', moviesRoutes)
app.use('/api/images', imagesRoutes)
app.use('/api/providers', providersRoutes)

app.get('*', (req, res) => {
  res.status(404).json({ error: '404 not found' })
})

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})
