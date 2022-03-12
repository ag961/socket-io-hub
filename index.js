require('dotenv').config()


const cors = require('cors');

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }
});


// const corsOptions = {
//   origin: process.env.CORS_ORIGIN,
//   credentials: true,
//   optionSuccessStatus: 200
// }

app.use(cors());


app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});



io.on("connection", (socket) => {
  console.log('socket connected', socket.id)

  socket.emit('Handshake')
});


httpServer.listen(process.env.PORT);
// app.listen(3001);