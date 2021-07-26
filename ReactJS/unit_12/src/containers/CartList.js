import React from 'react';
import Cart from '../components/Cart'
import { useSelector } from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';


function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    // переиндексация массива товаров
    //(где ключами будет артикул а содержимым обькт товаров )
    const goodsObj = goods.reduce((accum, item) => {
        console.log(accum);
        accum[item['articul']] = item;
        return accum;
    }, {});
     console.log(goodsObj);

     let minusHandler = ()=>{
        
     }
     let deleteHandler=( )=> {

     }


    return (
       <>
        <table>
        <h1> Basket </h1>
        <tbody>
            <tr>
            <td>Title</td>
            <td>Cost</td>
            <td>Count</td>
            <td> <button onClick={minusHandler}> - </button> </td>
            <td> <button onClick={deleteHandler}> Delete </button> </td>
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