const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/time', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendTime = () => {
    const now = new Date().toLocaleTimeString();
    res.write(`data: ${now}\n\n`);
  };

  sendTime(); // שליחת השעה הנוכחית מיד כשהלקוח מתחבר

  const intervalId = setInterval(sendTime, 1000); // שליחת השעה כל שניה

  // ניקוי החיבור כשהלקוח מתנתק
  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`SSE server running at http://localhost:${port}`);
});
