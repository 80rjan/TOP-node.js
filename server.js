const express = require('express');
const app = express();

app.set('view engine', 'ejs');

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

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
})

app.listen(3000, () => console.log('Listening on port 3000'));