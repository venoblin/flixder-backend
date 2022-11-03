const express = require('express')

const PORT = process.env.PORT || 3001
const app = express()

// Middleware
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`)
})
