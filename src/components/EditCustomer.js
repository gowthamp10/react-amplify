import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SearchAccount from "./SearchAccount";


function EditCustomer(){
    const navigate=useNavigate()
    const [data,setData]=useState({
        "found":false,
        "accno":""
    })
    const [netbanking,setNetbanking]=useState(false)
    const [customer,setCustomer]=useState({})

    const handleInput=(e)=>{
        setCustomer({...customer,[e.target.name]:e.target.value})        
    }

    const handleChange=(e)=>{
        //console.log(e.target.checked)
        customer.netbanking=e.target.checked;
        setNetbanking(e.target.checked)
    }

    const handleSubmit=e=>{
        e.preventDefault()
        customer.accno=data.accno
        console.log("customer-",customer)
        axios.put("http://localhost:8090/api/accounts/"+data.accno,customer)
        .then(resp=>{                        
            navigate('/accounts')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        console.log(data)
        axios.get("http://localhost:8090/api/accounts/"+data.accno)
        .then(resp=>{
            const info=resp.data.data;
            console.log("data from api",info)
            setCustomer(info?.customer)  
            setNetbanking(info?.netbanking)        
        }).catch(err=>{
            console.log(err)
        })
    },[data])

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                
                <div className="col-sm-10">
                    <h4 className="text-left p-2 border-bottom border-success" style={{color:"white"}}>Know Your Customer</h4>
                    <SearchAccount setData={setData} />
                    <div >
                    { data.found  ? (<>
                        <form onSubmit={handleSubmit} >
                            <div className="card shadow" style={{backgroundColor:"#28275C",color:"white"}}>
                                <div className="card-body">
                            <div className="form-row form-group">
                                <label className="col-sm-2">Customer Name</label>
                                <div className="col-3">
                                    <input type="text" name="cname" value={customer?.cname} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <label className="col-sm-2">Address</label>
                                <div className="col-3">
                                    <input type="text" name="address" value={customer?.address} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <label className="col-sm-2">Gender</label>
                                <div className="col-3">
                                    <input type="text" name="gender" value={customer?.gender} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <label className="col-sm-2">Phone</label>
                                <div className="col-3">
                                    <input type="text" maxLength="10" name="phone" value={customer?.phone} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <label className="col-sm-2">Email Id</label>
                                <div className="col-3">
                                    <input type="email" name="email" value={customer?.email} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <label className="col-sm-2" for="nb">Net Banking</label>
                                <div className="col-3">
                                    <input type="checkbox" id="nb" name="netbanking" checked={netbanking} onChange={handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="col-sm-2 btn btn-primary btn-sm float-right">Update</button>
                            </div>
                            </div>
                        </form>
                    </>):""}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditCustomer;