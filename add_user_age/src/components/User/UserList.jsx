import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <>
      <Card className={classes.users}>
       {props.users && props.users.length > 0? <ul>
          {props.users.map((user,index) => (
            <li key={index}>
                {user.name}({user.age}Year old)
            </li>
          ))}
        </ul>: <p className={classes.users} >No users found.</p>}
      </Card>
    </>
  );
};

export default UserList;
