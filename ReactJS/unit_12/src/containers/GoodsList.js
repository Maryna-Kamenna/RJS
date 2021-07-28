import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import Goods from '../components/Goods'
import { increment} from '../store/cartSlice';

// берем даные из хранилища list data и выводит на экран
//здесь логика работы с хранилищем

function GoodsList() {

    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();


    let clickHandler = (event) =>{
        event.preventDefault();
        //console.log(event.target);
        let t = event.target;
        if(!t.classList.contains('add-to-cart')) return true;
        dispatch(increment(t.getAttribute('data-key'))); //если это кнопка - то вызову диспетчб и
    //передам ему артикул товара (дата кей)

 }

    return (
        <>
            <div className='goods-field' onClick={clickHandler}>
                {goods.map(item =>
                <Goods title={item.title} cost={item.cost} 
                 image={item.image} 
                articul={item.articul} key={item.articul} />)}
            </div>

        </>
    )
}
export default GoodsList