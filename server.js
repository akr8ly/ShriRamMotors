const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  const clean = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(root, clean === '/' ? 'index.html' : clean);
  if (!file.startsWith(root)) return res.writeHead(403).end();
  fs.readFile(file,(err,data)=>{
    if(err) return res.writeHead(404).end('Not found');
    res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'}); res.end(data);
  });
}).listen(4173, '127.0.0.1', () => console.log('Shri Ram Motors preview: http://127.0.0.1:4173'));
