const express = require('express');
const app = express();
const rawWords = require('../data/rawWords')

app.use(express.json());


app.get('/check/:word', async (req, res) => {
    const returned = await rawWords();
    try {
        res.json({ greeting: returned })
    } catch (e) {
        res.text(e.message)
    }
})
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
