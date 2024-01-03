import React,{useState} from "react";
import img1 from './images/result.png'
import {Navigate} from 'react-router-dom'
import "./project1.css"

const Page1=()=>{

    const[page2,updatepg2]=useState(false);
    if(page2){
    return <Navigate to="/Page2"/>
  }
    return(
        <div className="body">
            <div className="pg1div">
            <img src={img1} className="pg1img"/><br/><br/>
            <button className='pg1btn' onClick={()=>{
            updatepg2(true)
            }}><h4>START</h4></button> 
            </div>
        </div>
    )
}
export default Page1;