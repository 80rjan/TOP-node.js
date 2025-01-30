const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200);
    res.render('index', { name: "Borjan"});
})

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

const booksRouter = require('./routes/booksRouter');
app.use('/books', booksRouter);

const authorsRouter = require('./routes/authorsRouter');
app.use('/authors', authorsRouter);

app.get('*', (req, res) => {
    res.status(200);
    res.render('404');
})

app.listen(3000, () => console.log('Listening on port 3000'));