import React from "react";
import goodsArr from './goods.json'


function Cart(props) {

    // готовим goods2
    let goods2 = {};
    for (let i = 0; i < goodsArr.length; i++) goods2[goodsArr[i]['articul']] = goodsArr[i];

    return (
        <>
            <div className="cart-field">
                <h1>Корзина</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Art</th>
                            <th>Count</th>
                            <th>Cost</th>
                        </tr>
                        {Object.keys(props.data).map(item => <tr>
                            <td>{item}</td>
                            <td>{goods2[item]['title']}</td>
                            <td>{props.data[item]}</td>
                            <td>{goods2[item]['cost'] * props.data[item]}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Cart;