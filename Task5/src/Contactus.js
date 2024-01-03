import React from "react";

const Contactus=()=>{
    return(
        <div style={{textAlign:'justify'}}>
            <div style={{height:'auto',backgroundColor:'grey'}}>
            <center><h5 style={{color:'white',paddingTop:'2%',paddingBottom:'2%'}}>Contact Us</h5></center>
            </div><br/>
            <div className="contactus">
            <h5>Email Us</h5>
            <ul>
              <li>Artist Support</li>
              <p><u>mvsudharsan2001@gmail.com</u></p>
            </ul>
            <ul>
              <li>Media enqueries</li>
              <p><u>sudharsansurya0706@gmail.com</u></p>
            </ul>
            <h5>Call Us :</h5>
            <p>+91 9626698894</p>
            <h5>Customer and Seller Support Hours:24 hours a day,365 days a year.</h5>
            <p>If you contact us by phone, we’ll do our best to resolve
               your query on a call. Our phone service operates 24 hours 
               a day, seven days a week. Anything that cannot be resolved
               on a call and requires further investigation will be looked
              into within the next 3 working days after your call, however usually much faster!<br/><br/>
              If you contact us by email, please allow up to 3 working days to receive a response.
              Our email service hours are Monday-Friday from 8:30 am to 5.30 pm GMT.</p>
              </div>
        </div>
    )
}
export default Contactus;