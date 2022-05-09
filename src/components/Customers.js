import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";

function Customers(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8090/api/customers")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                
                <div style={{paddingLeft:"180px"}}>
                    <br/>
                <div >
                <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Phone</th>
                        <th>Aadhar No</th>                        
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td> {x.cname}</td>
                        <td>{x.address}</td>
                        <td>{x.gender}</td>
                        <td>{x.dob}</td>
                        <td>{x.phone}</td>
                        <td>{x.adhar}</td>
                        <td>{x.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Customers;