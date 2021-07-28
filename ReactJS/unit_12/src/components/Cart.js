import '../App.css'


function Cart(props) {
	let cart = goods.cart;
	let goodsObj = goods.data
	return (
		<>
			<div>
				<hr />
				<table>
					<tbody>
						<tr>
							<td><img src={props.image} alt='фото' className='item' /></td>
							<td>{props.title}</td>
							<td>{props.cost}</td>
							<td>{props.item}</td>
							<td>{props.total}</td>
							<td><button className='add-to-cart' data-key={props.articul}>+</button></td>
							<td><button className='minus-from-cart' data-key={props.articul}>-</button></td>
							<td><button className='remove-from-cart' data-key={props.articul}>del</button></td>
						</tr>
					</tbody>
				</table>
			</div>

		</>
	)
}
export default Cart