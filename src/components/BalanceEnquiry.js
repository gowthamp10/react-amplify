import Header from "./Header";
import SearchAccount from "./SearchAccount";
import SideBar from "./SideBar";

function BalanceEnquiry(){
    const setData=(setData)=>{
    }
    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-10">
                    <h4 className="text-left p-2 border-bottom border-success">Balance Enquiry</h4>

                    <SearchAccount setData={setData} />
                </div>
            </div>
        </div>
        </>
    )
}

export default BalanceEnquiry;