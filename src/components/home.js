function HomePage(){
    return (
        <div className="nbank">
            <div className="jumbotron bg-transparent text-white p-4 text-center border-bottom">
                <h4>Online Bank Application</h4>    
            </div>
            <p style={{textAlign:"center",color:"white"}}>One stop destination for all your transaction </p>
            <h5 style={{textAlign:"center",color:"white"}}>Happy Banking!!!</h5><br/>
            <div className="container">
                <div >
                    <div className="col-9 mx-auto text-center">
                        <div >
                            <button style={{width:"130px",height:"60px"}}className="btn btn-primary" onClick={()=>window.location.href='/login'}><h4>Login</h4></button> &nbsp; &nbsp;&nbsp;
                            <button style={{width:"130px",height:"60px"}}className="btn btn-primary" onClick={()=>window.location.href='/register'}><h4>Register</h4></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
export default HomePage;