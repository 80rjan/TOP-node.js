const db = require("../models/db");
const asyncHandler = require("express-async-handler");
const CustomError = require('../errors/CustomError')

const getAuthorId = asyncHandler(async (req, res) => {
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomError("Author Not Found");
    }

    res.send(`Author with id ${authorId} and name ${author.name}`);
})

module.exports = { getAuthorId };