const authors = [
    { id: 1, name: "Harlan Coben" },
    { id: 2, name: "Dante Aligeri" },
    { id: 3, name: "Harper Lee" },
];

const links = [
    {href: '/', name: 'home'},
    {href: 'about', name: 'about'},
    {href: 'contact', name: 'contact'},
    {href: 'books', name: 'books'},
    {href: 'authors', name: 'authors'},
]

async function getAuthorById(authorId) {
    return authors.find(author => author.id === Number(authorId)); // 👈 Convert to number
}

async function getAllAuthors() {
    return authors;
}

async function getLinks() {
    return links;
}

module.exports = { getAuthorById, getAllAuthors, getLinks };
