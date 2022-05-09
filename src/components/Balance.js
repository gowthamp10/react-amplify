import axios from "axios";
import { useEffect, useState } from "react";
import HeaderCust from "./HeaderCust";
import SideBar from "./SideBar";

function Balance(){
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
        <div className="container-fluid"><br/><br/>
            <div className="row">
                
                <br/>
                <div  style={{paddingLeft:"300px"}}>
                    <div className="card shadow">
                    
                        <div>
                        <div>
                            <div className="card shadow bg-success text-white ">
                                <div className="card-body">
                                    <img src="data:image/png;base64,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"
                                    style={{height:"150px",height:"100px",paddingLeft:"270px"}}/><br/><br/>
                                    <h4>You have currently Rs.{acinfo?.balance} in your Account Number {acinfo?.accno} </h4>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )}

export default Balance;