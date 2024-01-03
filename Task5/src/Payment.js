import React,{useState} from "react";
import "./project1.css"
import img1 from "./images/gpay.png"
import img2 from "./images/paytm.jpg"
import img3 from "./images/phonepay.png"
import swal from 'sweetalert2'

const Payment=()=>{

    const [oilpainting,setoilpainting]=useState('OilPainting');
      const [caricature,setcaricature]=useState('Caricature');
      const [mandalaart,setmandalaart]=useState('Mandala Art');
      const [watercolorart,setwatercolorart]=useState('Watercolor Painting');
      const [realismart,setrealismart]=useState('Realism Art');
      const [cartoonart,setcartoonart]=useState('Cartoon Art');

      const [oilpaint,setoilpaint]=useState('1250');
      const [cari,setcari]=useState('950');
      const [mandala,setmandala]=useState('1950');
      const [watercolor,setwatercolor]=useState('1050');
      const [realism,setrealism]=useState('1600');
      const [cartoon,setcartoon]=useState('1450');
      
      const [artrate,setrate]=useState('');

      const [add,setadd]=useState('');

      const [name,setname]=useState('');
      const [mail,setmail]=useState('');
      const [phone,setphone]=useState('');
      const [address,setaddress]=useState('');
      const [city,setcity]=useState('');
      const [state,setstate]=useState('');
      const [pincode,setpincode]=useState('');
      const[error,seterror]=useState();


      const bill=()=>{
        if(document.getElementById("select").value===oilpainting){
            setrate(oilpaint);
            setadd(1250+100+10);
            
        }
        if(document.getElementById("select").value===caricature){
            setrate(cari);
            setadd(950+100+10);
            
        }
        if(document.getElementById("select").value===mandalaart){
            setrate(mandala);
            setadd(1950+100+10);
            
        }
        if(document.getElementById("select").value===watercolorart){
            setrate(watercolor);
            setadd(1050+100+10);
            
        }
        if(document.getElementById("select").value===realismart){
            setrate(realism);
            setadd(1600+100+10);
            
        }
        if(document.getElementById("select").value===cartoonart){
            setrate(cartoon);
            setadd(1450+100+10);
            
        }
      }
      const handlesubmit=(e)=>{
        e.preventDefault();
          if(name.length==0||mail.length==0||phone.length==0||address.length==0||city.length==0||state.length==0||pincode.length==0){
            seterror(true)
          }
    }
    const alert=()=>{
        if(name.length>0&&mail.length>0&&phone.length>0&&address.length>0&&city.length>0&&state.length>0&&pincode.length>0){
               swal.fire("Submitted")
        }
     }
    return(
        <div>
            <h1 style={{marginLeft:'4%'}}>Payment</h1>
         <hr/>
         <div style={{display:'flex'}}>
         <div className="paytable">
            <p>OilPainting</p>
            <p>₹ 1250</p>
         </div>
         <div className="paytable">
            <p>Caricature</p>
            <p>₹ 950</p>
         </div>
         <div className="paytable">
            <p>Mandala Art</p>
            <p>₹ 1950</p>
         </div></div><br/>
         <div style={{display:'flex'}}>
         <div className="paytable">
            <p>Watercolor Painting</p>
            <p>₹ 1050</p>
         </div>
         <div className="paytable">
            <p>realism Art</p>
            <p>₹ 1600</p>
         </div>
         <div className="paytable">
            <p>Cartoon Art</p>
            <p>₹ 1450</p>
         </div></div><br/><br/>
         <div>
            <div>
                <center><p><b>Type Of Art</b></p>
                <select id="select" className="payselect">
                    <option>Choose</option>
                    <option>OilPainting</option>
                    <option>Caricature</option>
                    <option>Mandala Art</option>
                    <option>Watercolor Painting</option>
                    <option>Realism Art</option>
                    <option>Cartoon Art</option>
                </select><button onClick={bill} className="paybtn">Click Me</button>
                </center><br/><br/>
                <div className="paybill">
                    <table>
                        <tr>
                            <td>Art Rate</td>
                            <td style={{visibility:'hidden'}}>----------------------------------------</td>
                            <td>{artrate}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td style={{visibility:'hidden'}}>----------------------------------------</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Discounts</td>
                            <td style={{visibility:'hidden'}}>----------------------------------------</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Sales Tax</td>
                            <td style={{visibility:'hidden'}}>----------------------------------------</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Total Amount</td>
                            <td style={{visibility:'hidden'}}>----------------------------------------</td>
                            <td style={{color:'red'}}>{add}</td>
                        </tr>
                    </table>
                </div>
            </div><br/>
            <div>
                <center><h4><u>DETAILS</u></h4></center><br/>
                <form onSubmit={handlesubmit}>
                    <table className="payform">
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type="text" onChange={e=>setname(e.target.value)} placeholder="Name"/></td>
                        </tr>
                        <tr>
                        <td ></td>
                            <td>{error&&name.length<=0?<label className="pg2label">Name is required</label>:''}</td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input type="email" onChange={e=>setmail(e.target.value)} placeholder="email"/></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td>{error&&mail.length<=0?<label className="pg2label">mail is required</label>:''}</td>
                        </tr>
                        <tr>
                            <td ><label>Phone No:</label></td>
                            <td><input type="number" onChange={e=>setphone(e.target.value)} placeholder="Phone no"/></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td>{error&&phone.length<=0?<label className="pg2label">Phone number is required</label>:''}</td>
                        </tr>
                        <tr>
                            <td ><label>Address:</label></td>
                            <td><input type="text" onChange={e=>setaddress(e.target.value)} placeholder="Address"/></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td>{error&&address.length<=0?<label className="pg2label">Address is required</label>:''}</td>
                        </tr>
                        <tr>
                            <td ><label>City:</label></td>
                            <td><input type="text" onChange={e=>setcity(e.target.value)} placeholder="city"/></td>
                        </tr>
                        <tr>    
                            <td ></td>
                            <td>{error&&city.length<=0?<label className="pg2label">City is required</label>:''}</td>
                        </tr>    
                        <tr>
                            <td ><label>State:</label></td>
                            <td><input type="text" onChange={e=>setstate(e.target.value)} placeholder="state"/></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td>{error&&state.length<=0?<label className="pg2label">State is required</label>:''}</td>
                        </tr>
                        <tr>
                            <td ><label>Pincode:</label></td>
                            <td><input type="number" onChange={e=>setpincode(e.target.value)} placeholder="pincode"/></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td>{error&&pincode.length<=0?<label className="pg2label">Pincode is required</label>:''}</td>
                        </tr>
                    </table><br/>
                    <button className="payformbtn" onClick={alert}>Submit</button>
                </form>
            </div><br/><br/>
            <div className="payment">
                <div style={{display:'flex'}}>
                <div className="payimgdiv"><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"><img src={img1} className="payimg"/></a></div>
                <div className="payimgdiv"><a href="https://play.google.com/store/apps/details?id=net.one97.paytm"><img src={img2} className="payimg"/></a></div>
                <div className="payimgdiv"><a href="https://play.google.com/store/apps/details?id=com.phonepe.app"><img src={img3} className="payimg"/></a></div>
                </div><br/>
                <p style={{fontWeight:'bold',textAlign:'justify'}}><span style={{color:'red'}}>*Note: </span>
                 Pay to this number 9626996153,After Payment Take a Screenshot and your 
                 Photo also send to this number on Whats App.</p>
            </div><br/><br/>
            </div>
        </div>
    )
}
export default Payment;