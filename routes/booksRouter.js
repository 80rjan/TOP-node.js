const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Books");
})
router.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book with id ${bookId}`);
})
router.get("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book with id ${bookId} is being reserved`);
})
router.post("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`Create book with id ${bookId} is being reserved`);
})

module.exports = router;