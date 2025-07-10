// const express = require('express');
// const app = express();
// const PORT = 3002;
// const cors = require('cors');
// const server = require('http').createServer(app);

// app.use(cors());
// app.get('/home', (req, res) => {
//   res.send({ msg: 'hello world' });
// })

// server.listen(PORT, () => {
//   console.log('Server is running on port ' + PORT);

// })

const { Server } = require('socket.io');
const io = new Server(3002, {
  cors: {
    origin: 'http://localhost:3000',
  }
});


io.on('connection', (socket) => {
  console.log(`user${socket.id} connected`);
  socket.on('disconnect', () => {
    console.log(`user${socket.id} disconnected`);
  });
});
