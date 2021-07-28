import React from 'react';
import Cart from '../components/Cart'
import { useDispatch, useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';
import { increment, minus, del } from '../store/cartSlice';



function CartList() {
  const goods = useSelector(selectGoods);// товары
  const cart = useSelector(selectCart);// корзина

  const dispatch = useDispatch();

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (t.classList.contains('add-to-cart')) {
      dispatch(increment(t.getAttribute('data-key')));
    };
    if (t.classList.contains('minus-from-cart')) {
      dispatch(minus(t.getAttribute('data-key')));
    };
    if (t.classList.contains('remove-from-cart')) {
      dispatch(del(t.getAttribute('data-key')));
    };



    // переиндексация массив товара
    //(где ключами будет артикул а содержимым обькт товаров(если товаров не так много))
    const goodsObj = goods.reduce((accum, item) => {
      // console.log(accum);
      accum[item['articul']] = item;
      return accum;
    }, {});
    console.log(goodsObj);


    return (
      <div onClick={clickHandler}>
        {Object.keys(cart).map(item =>
          <Cart data={goodsObj} cart-{cart}
            image={goodsObj[item]['image']}
            title={goodsObj[item]['title']}
            cost={goodsObj[item]['cost']}
            item={cart[item]}
            total={cart[item] * goodsObj[item]['cost']}
            articul={goodsObj[item]['articul']}
            key={goodsObj[item]['articul']}
          />
        )}

        {/* <h1> Basket </h1>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Cost</td>
                <td>Count</td>
                <td>Total cost</td>
              </tr>
              {Object.keys(cart).map(item => (
                <Cart cart={cart} goods={goodsObj} />))}
            </tbody>
          </table> */}
      </div>

    );
  }
}

export default CartList;