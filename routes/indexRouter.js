const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('about');
})
router.route('/contact')
    .get((req, res) => {
       res.render('Contact');
    })
    .post((req, res) => {
        res.send("Create contact")
    })

module.exports = router;