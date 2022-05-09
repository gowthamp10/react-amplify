import axios from "axios";
import { useState } from "react";

function SearchAccount({setData}){
    console.log("DatasetData",setData)
    const [search,setSearch]=useState("")
    const [found,setFound]=useState(false)
    const [err,setErr]=useState("")
    const [account,setAccount]=useState({
        "accno":"",
        "actype":"",
        "cname":"",
        "address":"",
        "balance":"",
        "active":"",
        "photo":"",
        "sign":""
    })
    const handleSearch=e=>{
        
        if(search.length>0){
            axios.get("http://localhost:8090/api/accounts/"+search)
            .then(resp=>{
                console.log("search result",resp.data)
                if(resp.data.data!=undefined){
                    setFound(true)
                    console.log(resp.data.data)
                    let data=resp.data.data;                    
                    setAccount({
                        "accno":data.accno,
                        "cname":data.customer.cname,
                        "address":data.customer.address,
                        "balance":data.balance,
                        "actype":data.actype,
                        "photo":data.customer.photo,
                        "active":data.active?"Yes":"No"
                    })
                    setData({"found":true,"accno":data.accno})                                       
                }else{
                    setErr("Invalid account number")
                    setFound(false);
                }
            })
            .catch(error=>{
                setErr("Invalid account number")
                setFound(false);
            })
        }
    }

    const handleInput=e=>{
        setSearch(e.target.value)
    }
    return(        
        <>
        <div style={{paddingLeft:"20px"}}>
       <br/>
        <div className="form-group form-inline">
            <label style={{color:"white"}}>Account No: </label>
            <input type="text" pattern="[0-9]{5,10}" value={search} onChange={handleInput} className="form-control ml-2" name="accno" placeholder="Account Number" />
            <button type="button" onClick={handleSearch} className="btn btn-primary ml-2">Search</button>                
        </div>
        {found ? (
            <>
            <div className="card shadow" style={{backgroundColor:"#28275C"}}>
                <div className="card-body">
            <table className="table">
                <tbody>
                <tr>
                    <th rowSpan="3">
                    </th>
                    <th>Account No</th>
                    <th>{account.accno}</th>
                    <th>Account Type</th>
                    <th>{account.actype}</th>
                </tr>
                <tr>
                    <th>Customer Name</th>
                    <th>{account.cname}</th>
                    <th>Address</th>
                    <th>{account.address}</th>
                </tr>
                <tr>
                    <th>Available Balance</th>
                    <th>&#8377; {account.balance}</th>
                    <th>Active</th>
                    <th>{account.active}</th>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
            <div className="mb-3"></div>
            </>
        ):(<h5 className="text-danger">{err}</h5>)}
        </div>
        </>
    )
}

export default SearchAccount;