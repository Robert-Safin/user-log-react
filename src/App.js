import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React, {useState} from 'react'

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) =>{
      return [...prevUsersList,{name: username, age:userAge, id: Math.random().toString()}]
    })
  }

  return (

  <div>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
  </div>

  )
}

export default App;
