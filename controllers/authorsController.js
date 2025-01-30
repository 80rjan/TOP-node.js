const db = require("../models/db");
const asyncHandler = require("express-async-handler");

const getAuthors = asyncHandler(async (req, res) => {
    let authors = await db.getAllAuthors();
    let string = "Authors: " + authors.map(author => author.name).join(", ");
    res.send(string);
})

module.exports = { getAuthors }