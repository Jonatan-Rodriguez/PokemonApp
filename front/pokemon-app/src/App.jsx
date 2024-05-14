//libraries
import { Routes, Route } from 'react-router-dom';
//hook
import { useLocation } from 'react-router-dom';
//Pages
import Landing from './views/Landing/Landing.jsx';
import Home from './views/Home/Home.jsx';
import FormPokemon from './views/FormPokemon/FormPokemon.jsx';
import Detail from './views/Detail/Detail.jsx';
//components
import Nav from './components/Nav/Nav.jsx';
import './App.css';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/formPokemon' element={<FormPokemon />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App;
