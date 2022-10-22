const express = require('express')
const router = express.Router()

const { getPackDetailImages } = require('../controllers/detailImages')

router.route('/').get(getPackDetailImages)

module.exports = router
