import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
function SideBar(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const role=sessionStorage.getItem("role")
    console.log("Role ",role)

    const logout=()=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        navigate("/");
    }
    return(
<div className="list-group list-group-flush">
    {role==="Admin" ? (<>
        <Link to="/dashboard" className="list-group-item list-group-item-info">Dashboard</Link>                                                                                                
        <Link to="/customers" className="list-group-item list-group-item-info">Customers</Link>
        <Link to="/open" className="list-group-item list-group-item-info">Open Account</Link>  
        <Link to="/kyc" className="list-group-item list-group-item-info">KYC</Link>                                               
        <Link to="/accounts" className="list-group-item list-group-item-info">Accounts</Link>
        <Link to="/deposit" className="list-group-item list-group-item-info">Deposit</Link>                                                                                         
        <Link to="/breport" className="list-group-item list-group-item-info">Bank Report</Link>                                                
        </>):(
            <>
        <Link to="/chome" className="list-group-item list-group-item-info">Home</Link>
        <Link to="/recipient" className="list-group-item list-group-item-info">Recipient</Link>
        <Link to="/otransfer" className="list-group-item list-group-item-info">Transfer</Link>
        <Link to="/cheque" className="list-group-item list-group-item-info">Cheque Book</Link>    
        <Link to="/thistory" className="list-group-item list-group-item-info">History</Link>
        <Link to="/balance" className="list-group-item list-group-item-info">Balance</Link>
        <Link to="/offers" className="list-group-item list-group-item-info">Offers</Link>
    </>)}
    <Link to="/changepwd" className="list-group-item list-group-item-info">Change Password</Link>
    <button onClick={()=>logout()} className="list-group-item list-group-item-info">Logout</button>
</div>
    )
}

export default SideBar;