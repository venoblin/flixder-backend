const express = require('express')
const cors = require('cors')
const db = require('./db')
const apiRouter = require('./routes/apiRouter')
const authRouter = require('./routes/authRouter')
const PORT = process.env.PORT || 3001
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api', apiRouter)
app.use('/auth', authRouter)

app.get('*', (req, res) => {
  res.status(404).json({ error: '404 not found' })
})

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})
