import React,{useState} from "react";
import "./project1.css"
import {Link} from 'react-router-dom'
import swal from 'sweetalert2'

const Page3=()=>{

    const[Name,updatename]=useState('');
    const[Email,updateemail]=useState('');
    const[password,updateps]=useState('');
    const[confirmpassword,updatecps]=useState('');
    const[error,seterror]=useState();

    const handlesubmit=(e)=>{
        e.preventDefault();
          if(Name.length==0||Email.length==0||password.length==0||confirmpassword.length==0){
            seterror(true)
          }
    }
    const alert=()=>{
       if(Name.length>0&&Email.length>0&&password.length>0&&confirmpassword.length>0&&document.getElementById("pw").value==document.getElementById("cpw").value){      
        swal.fire("successfully created")
       }
       else{
        seterror(true)
       }
    }
    return(
        <div className="body">
            <div className="pg3div">
            <h1>Create your Account</h1>
            <form onSubmit={handlesubmit}>
                <table className="pg2table">
                <tr>
                    <td><input type='text' onChange={e=>updatename(e.target.value)} placeholder="Name" className="pg2ip"/></td>
                </tr>
                <tr>
                    <td>{error&&Name.length<=0?<label className="pg2label">Name is Required</label>:""}</td>
                </tr>
                <tr>
                        <td style={{visibility:'hidden'}}>------</td>
                </tr>
                <tr>
                    <td><input type='email' onChange={e=>updateemail(e.target.value)} placeholder="email" className="pg2ip"/></td>
                </tr>
                <tr>
                    <td>{error&&Email.length<=0?<label className="pg2label">Email is Required</label>:""}</td>
                </tr>
                <tr>
                        <td style={{visibility:'hidden'}}>------</td>
                </tr>
                <tr>
                    <td><input type='password' onChange={e=>updateps(e.target.value)} id="pw" placeholder="password" className="pg2ip"/></td>
                </tr>
                <tr>
                    <td>{error&&password.length<=0?<label className="pg2label">password is Required</label>:""}</td>
                </tr>
                <tr>
                    <td>{error&&document.getElementById("pw").value!=document.getElementById("cpw").value?<label className="pg2label">Password mismatch</label>:""}</td>
                </tr>
                <tr>
                    <td style={{visibility:'hidden'}}>------</td>
                </tr>
                <tr>
                    <td><input type='password' onChange={e=>updatecps(e.target.value)} id="cpw" placeholder="confirm password" className="pg2ip"/></td>
                </tr>
                <tr>
                    <td>{error&&confirmpassword.length<=0?<label className="pg2label">confirmpassword is Required</label>:""}</td>
                </tr>
                </table><br/>
                <button className="pg2btn" onClick={alert}>Create</button><br/><br/>
            </form>
            <p><b>Already Have an Account? </b><Link to="/page2"><u><b>Sign in</b></u></Link></p>
            </div>
        </div>
    )
}
export default Page3;