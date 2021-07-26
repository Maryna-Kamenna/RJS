import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGoods } from '../store/goodsSlice'
import '../App.css'
import { selectCart } from '../store/cartSlice'
import { minus, delete } from '../store/cartSlice';

function Cart(props) {

	const goods = useSelector(selectGoods)
	const cart = useSelector(selectCart)
	const articul = props['articul'];

	const dispatch = useDispatch()

	const goodsObj = goods.reduce((accum, item) => {
		accum[item['articul']] = item
		return accum
	}, {})

	const minus = event => {
		event.preventDefault()
		let t = event.target

		if (!t.classList.contains('minus-cart')) return true;
		// !!!!!!!!!!!!!!! передаем сюда articul с кнопки!!!!
		dispatch(minus(event.target.dataset['key']));
	}

	const delete = () => {

  }

return(
  <>



<tr>
  <td>{goodsObj[articul]['title']}</td>
  <td>{goodsObj[articul]['cost']}</td>
  <td>{cart[articul]['count'] }</td>  
  <td><button
							className='minus-cart'
							data-key={articul}
							onClick={minusFunc}
						>
							-
						</button></td>
</tr>
  
</>
)
}
export default Cart