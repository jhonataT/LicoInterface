const express = require('express');
const { link } = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = '3000';

let data = new Array();

app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "main.html"));
});

app.post('/link', async (req, res) => {
    let link = req.body.linkWpp;
    const cmds = link.substring(link.indexOf('|'));
    link = link.substring(0, link.indexOf('|'));
    
    data.push({
        link: link,
        commands: cmds,
        groupId: 'false'
    });
    console.log(data);
        
    res.sendFile(path.resolve(__dirname, "views", "link.html"));    
});

app.get('/api', (req, res) => {
    res.send(JSON.stringify(data));
});

app.listen(port);