import { useDispatch } from 'react-redux'
import { addNewUser } from '../action'

function AddUser() {
	const dispatch = useDispatch()

	const formHandler = event => {
		event.preventDefault()
		console.log(event.target.elements)
		let data = event.target.elements
		console.log(data.passport.value);
		dispatch(addNewUser(data.passport.value, data.name.value, data.age.value))
	}

	return (
		<div>
			<form onSubmit={formHandler}>
				<div>
					<input type='text' name='passport' value='passsport' />
				</div>
				<div>
					<input type='text' name='name' value='Marina'  />
				</div>
				<div>
					<input type='text' name='age' value = '32' />
				</div>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default AddUser