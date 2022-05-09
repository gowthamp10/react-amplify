import emailjs from "emailjs-com"
import { useRef} from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderCust from "./HeaderCust";


function Email(){
    const form = useRef();
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_v4c326q', form.current, 'eyxMuI0PewAh8d6to')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("Thankyou for reaching out to us! We will get back to you soon")
    }
    const cid=sessionStorage.getItem("id")
    const [acinfo,setAcinfo]=useState()
    useEffect(()=>{
        axios.get("http://localhost:8090/api/customers/account/"+cid)
        .then(resp=>{
            console.log("Account Info",resp.data.data)    
            setAcinfo(resp.data.data)             
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <>
        <HeaderCust/>   
        <div className="container-fluid">
            <div className="row">
                <br/>
                <div style={{paddingLeft:"400px"}}><br/>
                    <div className="card shadow">
                        <div className="card-header">
                            <h5>Got a Query? Fill the Form</h5>
                        </div>
                        <div className="card-body" style={{backgroundColor:"#27285C"}}>
                        <form ref={form} onSubmit={sendEmail} style={{color:"white"}}>
                            <label>Name  </label>
                            &nbsp;&nbsp;<input type="text" name="user" value={acinfo?.customer.cname}/><br/><br/>
                            
                            <label>Query  </label>
                            &nbsp;&nbsp;<textarea name="message" style={{width:"265px"}}/><br/><br/>
                            <div style={{paddingLeft:"130px"}}>
                            <input type="submit" className="btn btn-primary"value="Send" />
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )}

export default Email;