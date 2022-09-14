import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NewProject from './pages/NewProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/newproject' element={<NewProject />}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
