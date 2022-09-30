var http = require('http');
var fs = require('fs');

var port = 8081;
var staticPath = 'static';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var url = req.url;

    if (url === '/') {
        renderHtml(staticPath + '/index.html', function (html) {
            res.write(html);
            res.end();
        });
    } else if (url === '/about') {
        renderHtml(staticPath + '/about.html', function (html) {
            res.write(html);
            res.end();
        });
    } else if (url === '/contact') {
        renderHtml(staticPath + '/contact.html', function (html) {
            res.write(html);
            res.end();
        });
    } else if (url === '/ajax') {
        renderHtml(staticPath + '/ajax.html', function (html) {
            res.write(html);
            res.end();
        });
    } else if (url === '/element') {
        renderHtml(staticPath + '/element.html', function (html) {
            res.write(html);
            res.end();
        });
    } else {
        renderHtml(staticPath + '/404.html', function (html) {
            res.write(html);
            res.end();
        });
    }
}).listen(port, function () {
    console.log('Server started at http://localhost:' + port);
})

function renderHtml(path, cb) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            return;
        }

        cb(data);
    });
}
