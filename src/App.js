import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Reserve from './components/Reseve/Reserve';
import Navbar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reserve" element={<Reserve/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
