import axios from "axios";
import { useEffect, useState } from "react";
import HeaderCust from "./HeaderCust";



function OnlineTransfer(){
    const cid=sessionStorage.getItem("id")
    const [msg,setMsg]=useState(null)
    const [data,setData]=useState({

    })
    const [accinfo,setAcinfo]=useState({})
    const [blist,setBlist]=useState([])
    const handleSubmit=e=>{
        e.preventDefault()
        console.log("form data",data)
        axios.post("http://localhost:8090/api/accounts/withdraw",data).then(resp=>{
            setMsg("Transfer successfully")
        })
        .catch(err=>{
            window.confirm("Insufficient balance");
            console.log(err)
        })
    }
    const handleInput=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        axios.get("http://localhost:8090/api/customers/beneficiary/"+cid)
        .then(resp=>{
            console.log(resp.data)    
            setBlist(resp.data.data)        
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get("http://localhost:8090/api/customers/account/"+cid)
        .then(resp=>{
            console.log("Account Info",resp.data.data)    
            setAcinfo(resp.data.data) 
            data.accno=resp.data.data.accno                   
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
                
        <div className="col-sm-10">
        <div className="row">
	<div className="col-sm-6 mx-auto"style={{paddingLeft:"150px"}}>
        <div className="card shadow mt-3">
            <div className="card-header">
                <h5>Account Transfer</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-4 col-form-label">Select Recipient</label> 
                        <div className="col-sm-8">
                        <select type="text" name="bname" onChange={handleInput} className="form-control">
                            <option>Select Recipient </option>
                            {blist.map(b=>(
                                <option key={b.id} value={b.id}>{b.bname }</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 col-form-label"> Remarks </label> 
                        <div className="col-sm-8">
                        <input type="text" name="ttype"  onChange={handleInput}
                            className="form-control" value={data.ttype}/>
                            </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 col-form-label">Available Balance</label> 
                        <div className="col-sm-8">
                        <input type="text" onChange={handleInput}
                        value={accinfo.balance} readOnly className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 col-form-label"> Transfer Amount</label> 
                        <div className="col-sm-8">
                        <input type="number" min="1" max={accinfo.balance} onChange={handleInput}
                        name="dramount" className="form-control" value={data.dramount} />
                        </div>
                    </div>
                    <button id="transfer" className="btn btn-primary float-right">Transfer
                        Now</button>
                </form>
            </div>
            {msg!=null ?(
                <div className="alert text-success font-weight-bold text-center">
                    {msg}
                </div>
            ):""}
        </div>
	</div>
</div>
                </div>
            </div>
        </div>
        </>
    )}

export default OnlineTransfer;