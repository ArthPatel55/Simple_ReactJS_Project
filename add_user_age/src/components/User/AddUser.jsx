import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername ,setEnteredUsername] = useState('');
  const [enteredAge,setEnteredAge] = useState('');
  const [error,setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid Input',
        message:'Please Enter Valid Name and Age(non-empty Values).'
      })
      return ;
    }
    if(+enteredAge < 1){
      setError({
        title:'Invalid Input',
        message:`Please Enter Valid Age(${enteredAge} > 0).`
      })
      return ;
    }
    props.onAddUser(enteredUsername,enteredAge);
    // console.log(enteredUsername,enteredAge)
    setEnteredAge('');
    setEnteredUsername('');
  };
  const usernameChangeHandler =(event)=>{
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event)=>{
    setEnteredAge(event.target.value);
  }
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <>
    {error && <ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name👨🏻‍💼</label>
          <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Year)</label>
          <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">➕Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
