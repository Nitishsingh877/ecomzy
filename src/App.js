import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/home';
import Cart from './page/Cart';
import Checkout from './page/Checkout';

function App() {
  return (
    <div>
  <div>
  <Navbar/>
  </div>

    <Routes>
    
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    
  


    </Routes>
    </div>
  );
}

export default App;
