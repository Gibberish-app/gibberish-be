const express = require('express');
const app = express();
const binarySearch = require('./utils/binarySearch')

app.use(express.json());


app.get('/check/:word', async (req, res) => {
    const word = req.params.word
    const formattedWord = word.toUpperCase();
    try {
        const response = binarySearch(formattedWord)
        res.json({ greeting: response })
    } catch (e) {
        res.json(e.message)
    }
})
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
