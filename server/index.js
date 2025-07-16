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

let users = [];

io.on('connection', (socket) => {
  console.log(`user ${socket.id} connected`);
  socket.on('disconnect', () => {
    users = users.filter((user) => user.socketID !== socket.id);
    io.emit('newUserResponse', users);
    socket.disconnect();
  });
  socket.on('message', (data) => {
    io.emit('messageResponse', data);
  });
  socket.on('newUser', (data) => {
    users.push(data);
    io.emit('newUserResponse', users);
  })
});

