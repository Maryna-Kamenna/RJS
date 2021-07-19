import React from 'react';
import { useDispatch } from 'react-redux';
import  {addNewUser}  from '../action';

const AddUser = ()=> {
  const dispatch = useDispatch()

  const  formHandler = (event)=>{
    event.PreventDefault();
    console.log(event.target.elements.passport.value);
    dispatch(addNewUser(
      event.target.elements.passport.value, 
      event.target.elements.name.value,
      event.target.elements.age.value)); 
   }

  return(
    <div>
      <form onSubmit={formHandler}>
        <div>
    <input type='text' name='passport' defaultValue='SM748496' ></input>
        </div>
        <div>
    <input type='text' name='name' defaultValue='Marina' ></input>
        </div>
        <div>
    <input type='text' name='age' defaultValue='32'></input>
        </div>
        <div>
      <button type='submit'> Add new user</button>
        </div>

      </form>
    </div>
  )
};

export default AddUser;