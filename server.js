const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3001;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected with ad ID:', socket.id);
  socket.on('disconnect', () => console.log('Client disconnected'));
})

