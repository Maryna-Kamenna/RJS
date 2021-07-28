import React from 'react';


function Cart(props) {
	let cart = props.cart;
	let goodsObj = props.data;

	let total = 0;
	Object.keys(cart).forEach(item => total += goodsObj[item]['cost']* cart[item]);

return (
<>
<table>
<tbody>
		<tr>
			<th>Item</th><th>Image</th><th>Price</th><th>Count</th><th>Cost</th></tr>
		{Object.keys(cart).map(item => 
		<tr>
			<th>{goodsObj[item]['title']}</th>
		<th><img src={goodsObj[item]['image']} alt='item' className='img' width='30px' /></th>
		<th>{goodsObj[item]['cost']}</th>
		<th>{cart[item]}</th><th>{goodsObj[item]['cost'] * cart[item]}</th>
		</tr>	
		)}
		</tbody>
	
<tr className='container2'>
	<th className='total' >Total:{total}</th>
</tr>
</table>
</>
)
}
export default Cart