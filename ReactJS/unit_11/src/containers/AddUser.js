import { useDispatch } from 'react-redux';
import { addNewUser } from '../action';

function AddUser() {
  const dispatch = useDispatch()

  const formHandler = (event) => {
    event.PreventDefault();
    console.log(event.target.elements);
    let data = event.target.elements
    console.log(data.passport.value);
    dispatch(addNewUser(data.passport.value, data.name.value, data.age.value))
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type='text' name='passport' />
        </div>
        <div>
          <input type='text' name='name' />
        </div>
        <div>
          <input type='text' name='age' />
        </div>
        <div>
          <button type='submit'> Add new user</button>
        </div>
      </form>
    </div>
  )
};

export default AddUser;