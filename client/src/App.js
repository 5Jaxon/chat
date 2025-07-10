import socketIo from 'socket.io-client'
import './App.css';
const socket = socketIo.connect('http://localhost:3002');

function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
