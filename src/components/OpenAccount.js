import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


function OpenAccount(){
    const navigate=useNavigate()
    const [submitted,setSubmitted]=useState(false)
    const [customers,setCustomers]=useState([])
    const [account,setAccount]=useState({
        "actype":"",
        "balance":0,
        "minbal":1000,
        "custid":""
    })
    useEffect(()=>{
        axios.get("http://localhost:8090/api/customers/pending")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmitted(true)
    }

    const handleInput=(e)=>{
        setAccount({...account,[e.target.name]:e.target.value})
    }
    
    useEffect(()=>{
        if(submitted){
            console.log("I am here")
            console.log(account)
            axios.post("http://localhost:8090/api/accounts",account)
            .then(resp=>{
                let result=resp.data.data;
                alert("Account opened successfully")
                navigate('/accounts')
            })
            .catch(error=>{
                console.log("Error",error);
                //alert("Invalid username or password")
            })            
        }
    },[submitted])
    
    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                
                <div style={{paddingLeft:"450px"}}>
                    <div className="row">
            <div ><br/><br/>
                <div className="card p-3">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group"> 
                            <label>Customer</label>
                            <select name="custid" value={account.custid} onChange={handleInput} required className="form-control">
                                <option value="">Select Customer</option>
                                {customers.map(x=>(
                                    <option key={x.id} value={x.id}>{x.id} - {x.cname}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">                
                            <label>Account Type</label>
                            <select name="actype" value={account.actype} onChange={handleInput} required className="form-control">
                                <option value="">Select Account Type</option>
                                <option>Saving Account</option>
                                <option>Current Account</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Opening Amount</label>
                            <input type="number" name="balance" required  value={account.balance} onChange={handleInput}
                                className="form-control"  placeholder="Opening Amount" />
                        </div>            
                        <button type="submit" className="btn btn-primary btn-block">Open Account</button>
                    </form> 
                </div>
            </div>
        </div>
</div>   
</div>
</div>
        </>
    )
}

export default OpenAccount;