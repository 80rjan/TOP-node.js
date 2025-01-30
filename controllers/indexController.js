const db = require('../models/db')
const asyncHandler = require('express-async-handler')


const getIndex = asyncHandler(async (req, res) => {
    const links = await db.getLinks();
    res.render('index', {links: links});
})

const getAbout = asyncHandler(async (req, res) => {
    const links = await db.getLinks();
    res.render('about', {links: links});
})

const getContact = asyncHandler(async (req, res) => {
    const links = await db.getLinks();
    res.render('contact', {links: links});
})


module.exports = {getIndex, getAbout, getContact}