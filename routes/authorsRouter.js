const express = require('express');
const router = express.Router();

const { getAuthors } = require('../controllers/authorsController');
router.get("/", getAuthors)

const { getAuthorId } = require("../controllers/authorIdController");
router.get("/:authorId", getAuthorId)

module.exports = router;