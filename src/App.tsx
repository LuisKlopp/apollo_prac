import './App.css';
import CharactersList from './pages/CharatersList';
import Character from './pages/Character';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharactersList />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/:id' element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
