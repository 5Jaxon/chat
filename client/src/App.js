import socketIo from 'socket.io-client'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import NotFound from './components/404'
import './App.css';
import { createContext } from 'react';
const socket = socketIo.connect('http://localhost:3002');
export const Context = createContext();

function App() {
  return (
    <div className="App">
      <Context value={socket}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/chat' element={<ChatPage socket={socket} />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>

        </BrowserRouter>
      </Context>

    </div>
  );
}

export default App;
