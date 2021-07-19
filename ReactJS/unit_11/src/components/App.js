import React from 'react'
import './App.css';
import AddUser from '../containers/AddUser';
import UserList from '../containers/UserList';
import List from './List';

function App() {
  return (
    <div>
  <AddUser />
  <UserList/>
    </div>
  );
}

export default App;
