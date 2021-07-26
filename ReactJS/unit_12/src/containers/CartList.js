import React from 'react';
import { useSelector } from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';


function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    // переиндексация массива товаров
    //(где ключами будет артикул а содержимым обькт товаров )
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    // console.log(goodsObj);


    return (
        <div>
                          <h1> Basket </h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Cost</th>
                            <th>Count</th>
                            <th> <button> - </button> </th>
                            <th> <button> Delete </button> </th>
                            <th>Total cost</th>
                        </tr>
            
                {Object.keys(cart).map(item => 
                <tr>
                   {/* <td>{item}</td> */}
                   <td>  {goodsObj[item]['title']}, {goodsObj[item]['cost']}  : {cart[item]} </td>
                   </tr>
                  )}
                  </tbody>
                </table>
        </div>
    );
}

export default CartList;