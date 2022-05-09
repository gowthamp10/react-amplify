import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SearchAccount from "./SearchAccount";

function Deposit(){
    const navigate=useNavigate()
    const [data,setData]=useState({
        "found":false,
        "accno":""
    })

    const [tran,setTran]=useState({
        "accno":"",
        "tdate": moment(new Date()).format("YYYY-MM-DD"),
        "cramount":"",
        "ttype":"Cash Deposit"
    })

    const childToParent=(childData)=>{
        setData(childData)
        console.log(data)
    }

    const handleInput=(e)=>{
        setTran({...tran,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        tran.accno=data.accno
            console.log(tran)
            axios.post("http://localhost:8090/api/accounts/deposit",tran)
            .then(resp=>{
                console.log(resp.data)
                navigate('/accounts')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                
                <div className="col-sm-10">
                    
                    <SearchAccount setData={setData} />

                    { data.found  ? (<>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row form-group">
                                <label className="col-sm-2 col-form-label" style={{color:"white"}}>Transaction Date</label>
                                <div className="col-3">
                                    <input type="date" id="tdate" name="tdate" value={tran.tdate} onChange={handleInput} className="form-control" />
                                </div>
                                <label className="col-sm-2 col-form-label" style={{color:"white"}}>Deposit Amount</label>
                                <div className="col-3">
                                    <input type="number" min="1" name="cramount" value={tran.amount} onChange={handleInput} className="form-control" />
                                </div>
                                <button className="col-sm-1 btn btn-primary float-right">Deposit</button>
                            </div>
                        </form>
                    </>):""}
                </div>
            </div>
        </div>
        </>
    )
}

export default Deposit;