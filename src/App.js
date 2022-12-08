import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <h2> this is Router Firebase Intergation</h2>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/orders' element={
          <RequiredAuth>
            <Orders></Orders>
          </RequiredAuth>
        }></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
