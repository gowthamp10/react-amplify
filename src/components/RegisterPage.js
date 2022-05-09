import axios from "axios"
import { useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import uservalidation from "../uservalidation"

function RegisterPage(){
    const [user,setUser]=useState(null)
    const [selectedPhoto,setSelectedPhoto]=useState(null)
    const [file,setFile]=useState(null)
    const [selectedSignPhoto,setSelectedSignPhoto]=useState(null)
    const [signfile,setSignFile]=useState(null)
    const [errors,setErrors]=useState({})
    const navigate=useNavigate()
    const [submitted,setSubmitted]=useState(false)
    const [emailerr,setEmailErr]=useState(null)
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleFileInput=e=>{
        setSelectedPhoto(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]))    
        handleInput(e)    
    }
    const handleSignFileInput=e=>{
        setSelectedSignPhoto(e.target.files[0])
        setSignFile(URL.createObjectURL(e.target.files[0]))
        handleInput(e)
    }

    const handleVerify = e=>{
        axios.get("http://localhost:8090/api/users/verify?email="+e.target.value)
        .then(resp=>{
            console.log(resp.data)
            if(resp.data.status==="error"){
                alert(resp.data.error)
            }
            resp.data.status==="error" ? setEmailErr(resp.data.error) : setEmailErr(null)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user)) 
        
        if(Object.keys(errors).length===0){
            console.log(user)
            const formData=new FormData()
            formData.append("photo",selectedPhoto)
            formData.append("sign",selectedSignPhoto)
            formData.append("cname",user.name)
            formData.append("address",user.address)
            formData.append("gender",user.gender)
            formData.append("adhar",user.adhar)
            formData.append("phone",user.phone)
            formData.append("email",user.email)
            formData.append("dob",user.dob)
            formData.append("pwd",user.pwd)

            formData.append("source","Self")

            console.log(user)
            axios.post("http://localhost:8090/api/customers",formData)
            .then(resp=>{
                console.log(resp)
                setUser(null)
                setSelectedPhoto(null)
                setSelectedSignPhoto(null)
                e.target.reset()
                alert("Customer registered successfully")
                //navigate("/login")
            })
            .catch(error=>console.log("Error",error))            
        }    
    }

    useEffect(()=>{        
        console.log(errors)  
    },[])
    return(
        <div className="login">
        <div className="container pt-3">
        <div className="card shadow pt-3">
        <div className="card-body">
        <h4 className="text-center p-2">
            Register
        </h4><br/>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-2 offset-1">
                    
                     
                    <input type="file" value={user?.photo} name="photo" onChange={handleFileInput} className="form-control-file" accept=".png" />
                    {errors?.photo && <small className="text-danger float-right">{errors?.photo}</small>}

                    {selectedSignPhoto ? <img className="img-thumbnail" style={{height:"90px",width:"100%"}} src={signfile} alt="Photo" /> : 
                    <img src={''} className="img-thumbnail" />} 
                    
                    <h5 className="p-2">Sign</h5>
                    <input type="file" value={user?.sign} name="sign" className="form-control-file" accept=".png"  onChange={handleSignFileInput}/>
                    {errors?.sign && <small className="text-danger float-right">{errors?.sign}</small>}
                </div>
                <div className="col-sm-6 offset-1">
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" name="name" value={user?.name} onChange={handleInput} className="form-control" />
                            {errors?.name && <small className="text-danger float-right">{errors?.name}</small>}                            
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">City</label>
                        <div className="col-sm-8">
                            <input type="text" name="address" value={user?.address} onChange={handleInput} className="form-control" />
                            {errors?.address && <small className="text-danger float-right">{errors?.address}</small>}
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Gender</label>
                        <div className="col-sm-8">
                            <select name="gender" value={user?.gender} onChange={handleInput} className="form-control">
                                <option value="">Select Gender</option>
                                <option>Male</option>     
                                <option>Female</option>     
                            </select> 
                            {errors?.gender && <small className="text-danger float-right">{errors?.gender}</small>}                      
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Email Id</label>
                        <div className="col-sm-8">
                            <input type="email" name="email" value={user?.email} onBlur={handleVerify} onChange={handleInput} className="form-control" />
                            {errors?.email && <small className="text-danger float-right">{errors?.email}</small>}
                            {emailerr && <small className="text-danger float-right">{emailerr}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Date of Birth</label>
                        <div className="col-sm-8">
                            <input type="date" name="dob" value={user?.dob} onChange={handleInput} className="form-control" />
                            {errors?.dob && <small className="text-danger float-right">{errors?.dob}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Phone</label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" name="phone" value={user?.phone} onChange={handleInput} className="form-control" />
                            {errors?.phone && <small className="text-danger float-right">{errors?.phone}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Aadhar No</label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="12" name="adhar" value={user?.adhar} onChange={handleInput} className="form-control" />
                            {errors?.adhar && <small className="text-danger float-right">{errors?.adhar}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user?.pwd} onChange={handleInput} className="form-control" />
                            {errors?.pwd && <small className="text-danger float-right">{errors?.pwd}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Confirm Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="cpwd" value={user?.cpwd} onChange={handleInput} className="form-control" />
                            {errors?.cpwd && <small className="text-danger float-right">{errors?.cpwd}</small>}
                        </div>
                    </div>
                    <button className="btn btn-primary">Register Now</button><br/><br/>
                    <h6>Already have an account? <Link to="/login">Login</Link></h6>
                </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default RegisterPage;