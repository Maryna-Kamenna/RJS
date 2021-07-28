import React from 'react';
import Cart from '../components/Cart'
import { useDispatch, useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';
import { minus, del } from '../store/cartSlice';



function CartList() {

  const goods = useSelector(selectGoods);// товары
  const cart = useSelector(selectCart);// корзина

  const dispatch = useDispatch();

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;

    if (t.classList.contains('minus-from-cart')) {
      dispatch(minus(t.getAttribute('data-key')));
    };
    if (t.classList.contains('remove-from-cart')) {
      dispatch(del(t.getAttribute('data-key')));
    } else {
      return false
    };
  }

  // переиндексация массив товара
  //(где ключами будет артикул а содержимым обькт товаров(если товаров не так много))
  const goodsObj = goods.reduce((accum, item) => {
    // console.log(accum);
    accum[item['articul']] = item;
    return accum;
  }, {});
  console.log(goodsObj);





  return (
    <>
      <h2 className='center'>Basket</h2>
      <div className='goods-field' onClick={clickHandler}>
        <table>
          <tbody>
            <tr> <th>Item</th><th>Image</th><th>Price</th><th>Count</th><th>Cost</th> </tr>
            <Cart data={goodsObj} cart={cart} goods={goods} />

          </tbody>
        </table>

      </div>
    </>
  )
}

export default CartList;