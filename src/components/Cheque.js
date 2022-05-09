import axios from "axios";
import { useEffect, useRef, useState } from "react";
import HeaderCust from "./HeaderCust";
import {useReactToPrint} from "react-to-print"


function Cheque(){
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
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () =>componentRef.current,
    })
    const [trans,setTrans]=useState([])
    const [data,setData]=useState({
        "found":false,
        "accno":""
    })

    useEffect(()=>{
        console.log(data)
        axios.get("http://localhost:8090/api/accounts/passbook/"+data.accno)
        .then(resp=>{
            console.log(resp.data)    
            setTrans(resp.data.data)        
        })
        .catch(err=>{
            console.log(err)
        })
    },[data])

    return(
        <>
        <HeaderCust/>
        <div className="container-fluid">
            <div className="row">
                
                <div style={{paddingLeft:"150px"}}>
                <br/><br/>
                    <div className="card" style={{textAlign:"center"}}>
                        
                        <div className="card" ref={componentRef}>
                            
                            <div className="card-title"><hr/><h4>CHEQUE BOOK</h4><hr/><br/></div>
                            <h4>Pay to the order of &nbsp;&nbsp;<em> {acinfo?.customer.cname}</em></h4><br/>
                           of  amount $_______________________ only <br/><br/>
                           <h5 >Online Bank</h5>
                           <em >255 Main Street, Town, 67845</em>
                            <h5 style={{paddingRight:"900px"}}>DATE: </h5><br/>
                            <h5 style={{paddingRight:"880px"}}>Signature: </h5>
                        </div>
                        
                    </div>
                    <br/><br/>
                    <div style={{paddingLeft:"450px"}}>
                    <button className="btn btn-primary" onClick={handlePrint}>Download</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cheque;