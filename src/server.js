const express = require('express');
const { link } = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = '3000';

app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

app.post('/link', (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "index.html"));
    const link = req.body.linkWpp;
    console.log(`link = ${link}`);
});

app.listen(port);