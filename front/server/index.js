const express = require('express');
const path = require('path');
const http = require('http');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + './../front'));
app.use(compression());

app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname));
});
app.all('*', (req, res) => {
    res.status(200).sendFile('/', { root: __dirname + "./../front" })
});
const server = http.createServer(app);

server.listen(port, () => {
    console.log('front on port', port);
})