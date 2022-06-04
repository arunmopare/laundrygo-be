const express = require('express')
const app = express()
const port = 3000

const AdminAuthRoutes = require('./admin/routes/auth.routes.js')

// Admin Routes TODO: Add appropriate middleware
app.use('/auth', AdminAuthRoutes)

app.get('/', (req, res) => res.send('Hello Clothes!'))
app.listen(port, () => console.log(`app listening on port ${port}!`))