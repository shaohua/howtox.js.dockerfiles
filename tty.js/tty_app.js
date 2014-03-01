var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  port: 8000
});

app.listen();
