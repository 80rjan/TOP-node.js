const express = require('express');
const router = express.Router();

const {getIndex, getAbout, getContact} = require('../controllers/indexController')

router.get('/', getIndex);
router.get('/about', getAbout)
router.route('/contact')
    .get(getContact)
    .post((req, res) => {
        res.send("Create contact");
    })

module.exports = router;