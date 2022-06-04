const express = require('express')
const router = express.Router();

const { signInAdmin } = require('../controllers/auth-controllers')

// sign in routes
// TODO: Add jwt
router.post("/sign-in", signInAdmin)

module.exports = router;