const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Authors");
})
router.get("/:authorId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Author with id ${bookId}`);
})

module.exports = router;