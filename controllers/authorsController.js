const db = require("../models/db");
const asyncHandler = require("express-async-handler");

const getAuthors = asyncHandler(async (req, res) => {
    let authors = await db.getAllAuthors();
    let links = await db.getLinks();
    res.render("authors", {authors: authors, links: links});
})

module.exports = { getAuthors }