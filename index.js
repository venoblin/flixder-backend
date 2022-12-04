const express = require('express')
const cors = require('cors')
const db = require('./db')
const apiRouter = require('./routes/apiRouter')
const authRouter = require('./routes/authRouter')
const PORT = process.env.PORT || 3001
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', apiRouter)
app.use('/auth', authRouter)

// 404 route
app.get('*', (req, res) => {
  res.status(404).json({ error: '404 not found' })
})

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})
