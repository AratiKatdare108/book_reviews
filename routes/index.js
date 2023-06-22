//routes is the C (controller) in MVC architecture
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router