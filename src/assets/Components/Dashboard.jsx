import React from 'react'
import Card from './Card'

function Dashboard() {
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
            data.map((e,i)=>
            {
               return <Card cardData={e} key={i}/>
            })
          }
     </div>     
     </div>                          
    </div>
    </div>
 </>
}

export default Dashboard