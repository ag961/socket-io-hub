const { application } = require('express');
const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3001;



const server = express()
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

server.get('/', (req, res)=> {
  res.status(200).send('I like pizza!')
})


const io = socketIO(server);



io.on('connection', (socket) => {
  console.log('Client connected with ad ID:', socket.id);
  socket.on('disconnect', () => console.log('Client disconnected'));
})

