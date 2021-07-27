import React from 'react';
import Cart from '../components/Cart'
import { useSelector } from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';


function CartList() {
    const goods = useSelector(selectGoods);// товары
    const cart = useSelector(selectCart);// корзина
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
       <h1> Basket </h1>
        <table>   
        <tbody>
            <tr>
            <td>Title</td>
            <td>Cost</td>
            <td>Count</td>
            <td>Total cost</td>
            </tr>    
            {Object.keys(cart).map(item =>(
            <Cart key={item} articul={item} />))}
         </tbody>
        </table>
      </> 
    );
}

export default CartList;