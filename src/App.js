import logo from './logo.svg';
import './App.css';
import AppNavbar from './component/AppNavbar';
import { Routes,Route } from 'react-router-dom';
import Products from './component/Products';
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="cart" element={<Cart/>}/>

      </Routes>


    </div>
  );
}

export default App;
