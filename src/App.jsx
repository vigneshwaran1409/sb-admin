import React,{useState} from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Class from './Components/Class'
import User from './Components/User'
import Querry from './Components/Querry'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'

function App() {
  let [user,setuser] = useState ([
    {
      id:1,
      name:"vicky",
      email:"vicky@gmail.com",
      mobile:"65456789",
      batch:"B53"
    },
    {
      id:2,
      name:"mohan",
      email:"mohan@gmail.com",
      mobile:"1234567890",
      batch:"B53"
    },
    {
      id:3,
      name:"dinesh",
      email:"dinesh@gmail.com",
      mobile:"1245367872",
      batch:"B53"
    }
  ])
  return <div id="wrapper">
         <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route path = '/dashboard'element={<Dashboard user={user} setuser={setuser}/>}/>
            <Route path = '/add-user'element={<AddUser/>}/>
            <Route path = '/edit-user/:id'element={<EditUser/>}/>
            <Route path = '/class'element={<Class/>}/>
            <Route path = '/user'element={<User/>}/>
            <Route path = '/querry'element={<Querry/>}/>
            <Route path = '*'element={<Navigate to='/dashboard'/>} />
          </Routes>
         </BrowserRouter>
  </div>
}

export default App
