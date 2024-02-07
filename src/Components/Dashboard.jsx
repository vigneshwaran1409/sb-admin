import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Dashboard({user,setUser}) {

    let data=[
        {
            title:"EARNINGS(MONTHLY)",
            price:"$40,000",
            icon:"fa-calendar",
            color:"primary",
            isProgress:false
        },
        {
            title:"EARNINGS(ANNUAL)",
            price:"$215,000",
            icon:"fa-dollar-sign",
            color:"success",
            isProgress:false
        },
        {
            title:"TASK",
            price:"50",
            icon:"fa-clipboard-list ",
            color:"info",
            isProgress:true
        },
        {
            title:"PENDING REQUESTS",
            price:"18",
            icon:" fa-comments",
            color:"warning",
            isProgress:false
        }
    ]


     let handleDelete = (id)=>{
        let index=0
        for(let i=0;i<user.length;i++)
        {
            if (user[i].id==id)
        {
          index=i
          break;
     }
    }
        let newArray=[...user]
        newArray.splice(index,1) //splice (start index delete count)
        setUser(newArray)
        
    }

  return<>
       <div id="content-wrapper" className="d flex flex-column">
        <div id="content">
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
           <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i className="fas fa-download fa-sm text-white-50"/> Generate Report</a>
     </div>

     <div className="row">
          {
            data.map((e,i)=>{
             return <Card cardData={e} key={i}/>
            })
          }
          </div>
           <div className="row">
           <Table striped bordered hover>
               <thead>
                <tr>
                    <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Mobile</th>
                     <th>Batch</th>
                     <th>Actions</th>
               </tr>
               </thead>
               <tbody>

                     {
                      user.map(e=>{
                        return <tr key={e.id}>
                         <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.email}</td>
                          <td>{e.mobile}</td>
                          <td>{e.batch}</td>
                          
                    
                    <td>
                         <Button variant='info' onClick ={()=>{navigate('/edit-user/${e.id}')}}>Edit</Button>
                        &nbsp;
                        <Button variant='danger'onClick={()=>{handleDelete(e.id)}}>Delete</Button>
                      </td>
                   </tr>  
            })
        }
        </tbody>
       </Table>     
      </div>                          
     </div>
    </div>
 </div>
 </>
}

export default Dashboard
