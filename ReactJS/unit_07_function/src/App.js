import './App.css';
import Goods from './Goods';
import Cart from './Cart';

import goodsArr from './goods.json'
import { useState } from 'react'


function App() {
  const [cart, setCart] = useState({})
  const [count, setCount] = useState(0)


  let addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;

    setCart(cartTemp);
    let count1 = count;
    count1++;
    setCount(count1)
  }
  let showCart

  if (count !== 0) {
    showCart = <Cart cart={cart} goods={goodsArr} />;
  } else {
    showCart = 'Empty';
  }

  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="goods-field" onClick={addToCart}>
        {goodsArr.map(item => <Goods title={item.title}
          cost={item.cost}
          image={item.image}
          articul={item.articul}
          key={item.articul} />)}
      </div>

    </div>
  );
}


export default App;
