const express = require('express');
const { link } = require('fs');
const bodyParser = require('body-parser');
const Database = require('./db');
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
    let link = req.body.linkWpp;
    const cmds = link.substring(link.indexOf('|'));
    link = link.substring(0, link.indexOf('|'));
    
    Database.addItem(link, cmds);
    
});

app.listen(port);