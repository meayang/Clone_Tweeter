const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
//const http2 = require('http2');

const name = 'skaru';
const courses = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JS  '},
];

const server = http.createServer((req,res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        ejs
        .renderFile('./template/index.ejs', {name})
        .then((data) => res.end(data));
    }else if(url === '/Courses'){
        ejs
        .renderFile('./template/courses.ejs', {courses})
        .then((data) => res.end(data));
    }else {
        ejs
        .renderFile('./template/notfound.ejs', {name})
        .then((data) => res.end(data));
    };
})

server.listen(8080);