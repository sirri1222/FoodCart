import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
    <div >
      <Cart/>
    <Header/>
    <main>
      <Meals/>
    </main>
    </div>
  );
}

export default App;
