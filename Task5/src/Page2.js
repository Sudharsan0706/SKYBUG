import React,{useState} from "react";
import "./project1.css"
import {Link} from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {Navigate} from 'react-router-dom'

const Page2=()=>{

    const[Email,updateemail]=useState('');
    const[password,updatepassword]=useState('');
    const[error,seterror]=useState();

    const[type,settype]=useState('password');
    const[icon,seticon]=useState(eyeOff);

    const[pg4,updatepg4]=useState(false);
    
    const handlesubmit=(e)=>{
        e.preventDefault();
          if(Email.length==0||password.length==0){
            seterror(true)
          }
    }
     const handletoggle=()=>{
        if(type==='password'){
            seticon(eye)
            settype('text')
        }
        else{
            seticon(eyeOff)
            settype('password')
        }
     }
     if(pg4){
        return <Navigate to="/Page4"/>
     }
    return(
        <div className="body">
            <div className="pg2div">
            <h1>Welcome</h1>
            <form  onSubmit={handlesubmit}>
                <table className="pg2table">
                    <tr>
                        <td><input type='email'onChange={e=>updateemail(e.target.value)} placeholder="Email" className="pg2ip"/></td>
                    </tr>
                    <tr>
                        <td>{error&&Email.length<=0?<label className="pg2label">Email is Required</label>:""}</td>
                    </tr>
                    <tr>
                        <td style={{visibility:'hidden'}}>------</td>
                    </tr>
                    <tr>
                        <td><input type={type} onChange={e=>updatepassword(e.target.value)} placeholder="password" className="pg2ip"/></td>
                        <span className="icon" onClick={handletoggle}><Icon icon={icon} size={20}/></span>
                    </tr>
                    <tr>
                        <td>{error&&password.length<=0?<label className="pg2label">password is Required</label>:""}</td>
                    </tr>
                </table><br/>
                <button className='pg2btn' onClick={()=>{
                if(Email.length>4&&password.length>4){
                updatepg4(true)
                }}}>
                Log in</button>
            </form>
            <h4>or</h4>
            <h5><Link to="/Page3">Create a Account?</Link></h5>
            </div>
        </div>
    )
}
export default Page2;