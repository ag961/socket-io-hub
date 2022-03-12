// const cors = require('cors');
// const express = require('express');
// const socketIO = require('socket.io');
// const PORT = process.env.PORT || 3002;

// const app = express();
// const corsOptions = {
//   origin:process.env.CORS_ORIGIN, 
//   credentials:true,
//   optionSuccessStatus:200
// }

// app.use(cors(corsOptions));

// app.get('/', (req, res) => {
//   res.status(200).send('Hello world');
// });

// const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`))

// const io = socketIO(server);

// io.on('haha', (socket) => {
//   io.emit('noo')
// })
