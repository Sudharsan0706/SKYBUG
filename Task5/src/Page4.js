import React,{useState} from "react";
import "./project1.css"
import {Link} from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {phone} from 'react-icons-kit/feather/phone'
import {info} from 'react-icons-kit/feather/info'
import {fileText} from 'react-icons-kit/feather/fileText'
import {navicon} from 'react-icons-kit/fa/navicon'
import img1 from './images/result.png'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'
import img4 from './images/image4.jpg'
import img5 from './images/image5.webp'
import img6 from './images/oilpaint1.webp'
import img7 from './images/caricature.jpeg'
import img8 from './images/krishmandala.jpg'
import img9 from './images/watercolor.webp'
import img10 from './images/realism.jpg'
import img11 from './images/cartoon.jpeg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Page4=()=>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div>
            <div className="pg4header">
            <img src={img1} className="pg4img"/>
            <Link to="/Aboutus"  style={{textDecoration:'none'}} className="pg4btn1"><Icon icon={info}  size={16} className="pg4icon" /> 
            <span style={{visibility:'hidden'}}>_</span>About us</Link>
            <Link to="/Contactus" style={{textDecoration:'none'}} className="pg4btn2"><Icon icon={phone}  size={16} className="pg4icon" /> 
            <span style={{visibility:'hidden'}}>_</span>Contact us</Link>
            <Link to="/Termsandconditions"  style={{textDecoration:'none'}} className="pg4btn3">
            <Icon icon={fileText}  size={16}/> Terms & conditions</Link>
            <Button variant="primary" onClick={handleShow} className="pg4btn4">
            <Icon icon={navicon}/>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Paintartist</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className="linespace">
              <li><Link to="/Aboutus"  style={{textDecoration:'none'}} >About us</Link></li>
              <li><Link to="/Contactus"  style={{textDecoration:'none'}} >Contact us</Link></li>
              <li><Link to="/Termsandconditions"  style={{textDecoration:'none'}} >Terms and conditions</Link></li>
            </ul>
            </Offcanvas.Body>
            </Offcanvas>
            </div>

            <div style={{backgroundColor:'lightblue'}}><Carousel>
            <Carousel.Item interval={1000}>
            <img className="d-block w-100 pg4carousal" src={img2}  alt="First slide"/>
            <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <img className="d-block w-100 pg4carousal" src={img3} alt="Second slide"/>
            <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <img className="d-block w-100 pg4carousal" src={img4} alt="Second slide"/>
            <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <img className="d-block w-100 pg4carousal" src={img5} alt="Third slide"/>
            <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            </Carousel></div>

            <div className="pg4card"> 
             <Card className="pg4cardwidth pg4cardlinebr">
             <Card.Img variant="top" src={img6} className="pg4cardimg"/>
             <Card.Body  style={{textAlign:'justify'}}>
             <Card.Title>Oil Painting</Card.Title>
             <Card.Text>
              Paper Size <br/>
              Width : 8.3 inch<br/>
              Height : 11.7 inch<br/>
              <b>₹ 1250</b>
             </Card.Text>
             <Button variant="primary" ><Link to="/Payment" style={{color:'white',textDecoration:'none'}}>Order Now</Link></Button>
             </Card.Body>
             </Card>
             <Card  className="pg4marginleft pg4cardwidth pg4cardlinebr">
             <Card.Img variant="top" src={img7} className="pg4cardimg"/>
             <Card.Body  style={{textAlign:'justify'}}>
             <Card.Title>Caricature</Card.Title>
             <Card.Text >
              Paper Size <br/>
              Width : 8.3 inch<br/>
              Height : 11.7 inch<br/>
              <b>₹ 950</b>
             </Card.Text>
             <Button variant="primary"><Link to="/Payment" style={{color:'white',textDecoration:'none'}}>Order Now</Link></Button>
             </Card.Body>
             </Card>
             <Card  className="pg4marginleft pg4cardwidth">
             <Card.Img variant="top" src={img8} className="pg4cardimg"/>
             <Card.Body  style={{textAlign:'justify'}}>
             <Card.Title >Mandala Art</Card.Title>
             <Card.Text>
              Paper Size <br/>
              Width : 8.3 inch<br/>
              Height : 11.7 inch<br/>
              <b>₹ 1950</b>
             </Card.Text>
             <Button variant="primary"><Link to="/Payment" style={{color:'white',textDecoration:'none'}}>Order Now</Link></Button>
             </Card.Body>
             </Card>
             </div>
             <div className="pg4card">
             <Card className="pg4cardwidth pg4cardlinebr">
             <Card.Img variant="top" src={img9}  className="pg4cardimg"/>
             <Card.Body  style={{textAlign:'justify'}}>
             <Card.Title >Watercolor painting</Card.Title>
             <Card.Text>
              Paper Size <br/>
              Width : 8.3 inch<br/>
              Height : 11.7 inch<br/>
              <b>₹ 1050</b>
             </Card.Text>
             <Button variant="primary"><Link to="/Payment" style={{color:'white',textDecoration:'none'}}>Order Now</Link></Button>
             </Card.Body>
             </Card>
             <Card  className="pg4marginleft pg4cardwidth pg4cardlinebr">
             <Card.Img variant="top" src={img10} className="pg4cardimg"/>
             <Card.Body  style={{textAlign:'justify'}}>
             <Card.Title>Realism Art</Card.Title>
             <Card.Text>
              Paper Size <br/>
              Width : 8.3 inch<br/>
              Height : 11.7 inch<br/>
              <b>₹ 1600</b>
             </Card.Text>
             <Button variant="primary"><Link to="/Payment" style={{color:'white',textDecoration:'none'}}>Order Now</Link></Button>
             </Card.Body>
             </Card>
             <Card  className="pg4marginleft pg4cardwidth">
             <Card.Img variant="top" src={img11} className="pg4cardimg"/>
             <Card.Body  style={{textAlign:'justify'}}>
             <Card.Title>Cartoon art</Card.Title>
             <Card.Text>
              Paper Size <br/>
              Width : 8.3 inch<br/>
              Height : 11.7 inch<br/>
              <b>₹ 1450</b>
             </Card.Text>
             <Button variant="primary"><Link to="/Payment" style={{color:'white',textDecoration:'none'}}>Order Now</Link></Button>
             </Card.Body>
             </Card>
             </div>
             <div className="pg4bottom">
             <p style={{color:'grey'}}><b> WE DELIVER TO</b></p>
             <hr style={{color:'white'}}/>
             <h5 style={{color:'white'}}>All Over India</h5>
             </div>
        </div>
    )
}
export default Page4;