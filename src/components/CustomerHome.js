import axios from "axios";
import { useEffect, useState } from "react";
import HeaderCust from "./HeaderCust";


function CustomerHome(){
    const cid=sessionStorage.getItem("id")
    const [acinfo,setAcinfo]=useState()
    useEffect(()=>{
        axios.get("http://localhost:8090/api/customers/account/"+cid)
        .then(resp=>{
            console.log("Account Info",resp.data.data)    
            setAcinfo(resp.data.data)             
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <>
        <HeaderCust/>   
        <div className="container-fluid">
            <div className="row">
                <br/>
                <div style={{paddingLeft:"400px"}}><br/>
                    <div className="card shadow">
                        <div className="card-header">
                            <h5>{acinfo?.customer.cname}'s Profile</h5>
                        </div>
                        <div className="card-body" style={{backgroundColor:"#27285C"}}>
                        <table className="table table-borderless" >
                            <tbody>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>{acinfo?.customer.cname}</th>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <th>{acinfo?.customer.address}</th>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <th>{acinfo?.customer.gender}</th>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <th>{acinfo?.customer.phone}</th>
                                </tr>
                                <tr>
                                    <th>Email Address</th>
                                    <th>{acinfo?.customer.email}</th>
                                </tr>
                                <tr>
                                    <th>Account Number</th>
                                    <th>{acinfo?.accno}</th>
                                </tr>
                                <tr>
                                    <th>Available Balance</th>
                                    <th>&#8377; {acinfo?.balance}</th>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )}

export default CustomerHome;