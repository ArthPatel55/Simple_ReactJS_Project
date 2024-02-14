import React from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  return (
    <>
    <AddUser/>
    <UserList users={[]}/>
    </>
  );
}

export default App;
