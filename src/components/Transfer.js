import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SearchAccount from "./SearchAccount";
import SideBar from "./SideBar";

function Transfer(){
    const navigate=useNavigate()
    const [submit,setSubmit]=useState(false)
    const [recname,setRecname]=useState("")
    const [data,setData]=useState({
        "found":false,
        "accno":""
    })

    const [tran,setTran]=useState({
        "accno":"",
        "tdate": moment(new Date()).format("YYYY-MM-DD"),
        "amount":"",
        "recacc":"",
        "recname":""
    })

    const handleInput=(e)=>{
        setTran({...tran,[e.target.name]:e.target.value})        
    }

    const handleSearch=e=>{
        console.log("Search for "+e.target.value)
        axios.get("http://localhost:8090/api/accounts/"+e.target.value)
        .then(resp=>{
            let info=resp.data;
            if(info.data!=undefined){
                console.log(info.data.customer.cname)
                setRecname(info.data.customer.cname)
            }else{
                setRecname("")
            }
        })
        
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setSubmit(true)
    }

    useEffect(()=>{
        console.log(data)
        if(submit){
            tran.accno=data.accno
            console.log(tran)
            axios.post("http://localhost:8090/api/accounts/transfer",tran)
            .then(resp=>{
                console.log(resp.data)
                navigate('/accounts')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },[data,submit])

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-10">
                    <h4 className="text-left p-2 border-bottom border-success">Transfer</h4>
                    <SearchAccount setData={setData} />

                    { data.found  ? (<>
                        <div className="card shadow">
                            <h5 className="p-2">Transfer Details</h5>
                <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row form-group">
                                <label className="col-sm-2 col-form-label">Transaction Date</label>
                                <div className="col-3">
                                    <input type="date" required name="tdate" value={tran.tdate} onChange={handleInput} className="form-control" />
                                </div>
                                <label className="col-sm-2 col-form-label">Transfer Amount</label>
                                <div className="col-3">
                                    <input type="number" min="1" required name="amount" value={tran.amount} onChange={handleInput} className="form-control" />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <label className="col-sm-2 col-form-label">Receiver's Account</label>
                                <div className="col-3">
                                    <input type="text" id="recacc" required name="recacc" onBlur={handleSearch} value={tran.recacc} onChange={handleInput} className="form-control" />
                                </div>
                                <label className="col-sm-2 col-form-label">Receiver's Name</label>
                                <div className="col-3">
                                    <input type="text" readOnly value={recname} name="recname" className="form-control" />
                                </div>
                                <button className="col-sm-2 btn btn-primary float-right">Transfer Now</button>
                            </div>
                        </form>
                        </div>
                        </div>
                    </>):""}

                </div>
            </div>
        </div>
        </>
    )
}

export default Transfer;