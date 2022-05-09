import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
function HeaderCust(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const role=sessionStorage.getItem("role")
    console.log("Role ",role)
    const logout=()=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        navigate("/");
    }
    const uname=sessionStorage.getItem("uname")
    return (
        <div style={{backgroundColor:"#1976D2",color:"white"}} >
            <h5 className="float-right m-2">Welcome {uname}</h5>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            
                <a class="navbar-brand" href="/chome" style={{color:"white"}}>Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/recipient" style={{color:"white"}}>Recipient <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/otransfer" style={{color:"white"}}>Transfer <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/cheque" style={{color:"white"}}> Cheque Book <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/thistory" style={{color:"white"}}> History <span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item active">
                        <a class="nav-link" href="/balance" style={{color:"white"}}>Balance <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/offers" style={{color:"white"}}>Offers<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/query" style={{color:"white"}}>Query<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/changepwd" style={{color:"white"}}>Change Password <span class="sr-only">(current)</span></a>
                    </li>
                    
                    </ul>
                    <button onClick={()=>logout()} className="list-group-item list-group-item-primary">Logout</button>
                    </div>
            </nav>
        </div>
    )}

export default HeaderCust;