require('dotenv').config()

const cors = require('cors');

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN,
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

io.on("connection", (socket) => {
  console.log('socket connected', socket.id)

  socket.emit('Handshake')
});

httpServer.listen(process.env.PORT);
