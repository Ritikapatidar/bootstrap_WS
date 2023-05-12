import Login from './component/Login'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './component/Add';
import Home from './component/Home';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route element={<Login />} path='/'></Route>
    <Route element={<Home />} path='/Home/:name/:role'></Route>
    <Route element={<Admin />} path='/Admin'></Route>
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
