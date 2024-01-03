import React,{useState} from 'react';
import './App.css';
import './portfolio.css'
import img1 from './images/M.V.sudharsan.jpg';
import img2 from './images/sudharsan.jpg';
import {MDBTabs,MDBTabsItem,MDBTabsLink,MDBTabsContent,MDBTabsPane} from 'mdb-react-ui-kit';
import Accordion from 'react-bootstrap/Accordion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import img3 from './images/frontend.jpg';
import img4 from './images/java.jpg';
import img5 from './images/javascript.jpg';
import img6 from './images/journal.jpg';
import img7 from './images/journalbp.jpg';
import img8 from './images/IQ.jpg';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icon } from 'react-icons-kit'
import {androidMenu} from 'react-icons-kit/ionicons/androidMenu'

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const bgcolor={backgroundImage:'linear-gradient(120deg,rgb(4, 158, 209),rgb(243, 99, 123))',color:'white'}

  const HTML = 75;
  const CSS = 75;
  const Javascript = 75;
  const Bootstrap = 75;
  const Reactjs = 75;
  const java = 70;
  return (
    <div>
      <div style={{display:'flex'}}>
      <h3>Portfolio</h3>
      <Button variant="primary" onClick={handleShow} className='naviconbtn'>
        <Icon icon={androidMenu} size={22}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>portfolio</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href='#home' className='navli'>Home</a></li>
            <li><a href='#about' className='navli'>About</a></li>
            <li><a href='#education' className='navli'>Education</a></li>
            <li><a href='#projects' className='navli'>Projects</a></li>
            <li><a href='#skills' className='navli'>Skills</a></li>
            <li><a href='#awards' className='navli'>Awards and Certification</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      <hr/>
      <div className='nav'>
        <a href='#home' className='navbtn'>Home</a>
        <a href='#about' className='navbtn'>About</a>
        <a href='#education' className='navbtn'>Education</a>
        <a href='#projects' className='navbtn'>Projects</a>
        <a href='#skills' className='navbtn'>Skills</a>
        <a href='#awards' className='navbtn'>Awards and Certification</a>
      </div>
      <div className='top' id='home'>
        <div className='topdiv1'><h1>I am M.V.Sudharsan</h1>
        <h3>Frontend Developer</h3>
        <p>Here I am Creating the Wonderful websites depends 
        on the client satisfications and Fullfill their needs.</p>
        <a href='https://drive.google.com/file/d/1e-_0XpPzCL_RGcwxwxWBKsxFqhPJ9Bj_/view?usp=sharing'>
          <button className='resumebtn'>Resume 🠇</button></a></div>
        <div className='topdiv2'>
          <img src={img1} className='topphoto'/>
        </div>
      </div><br/>
      <center><h1 className='allheading'>About</h1></center>
      <div className='aboutdiv' id='about'>
        <div className='aboutdiv1'>
         <img src={img2} className='aboutimg'/>
        </div>
        <div className='aboutdiv2'>
          <p>Hi,Myself M.V.Sudharsan.I am Graduated from Anjalai Ammal Mahalingam Engineering College in B.Tech-IT,2022 Passed Out.
            I am particuraly interested in Frontend developer and I have also completed Frontend development course in
            Besant Technologies at Chennai for build up my skills that will be valuable in the future.I am seeking for job
            Opportunities in Frontend developer.Iam eager to learn and adapt to different environments and
            would love to connect with you!
          </p>
        </div>
      </div><br/>
      <div className='edutabdiv' id='education'>
        <center><h1 className='allheading'>Education</h1></center>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} style={bgcolor}>
            Degree
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={bgcolor}>
            HSC
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'} style={bgcolor}>
            SSLC
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={basicActive === 'tab1'} className='edufont'>
          <h2>Degree</h2>
          <ul>
            <li>B.Tech-Information Technology</li>
            <li>Year-2018-2022</li>
            <li>Anjalai Ammal Mahalingam Engineering College</li>
            <li>CGPA-8.19</li>
          </ul>
        </MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab2'} className='edufont'>
          <h2>HSC</h2>
          <ul>
            <li>Computer Science</li>
            <li>Year-2017 to 2018</li>
            <li>Kalyana Sundaram Higher Secondary School</li>
            <li>Percentage - 73%</li>
          </ul>
        </MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab3'} className='edufont'>
        <h2>SSLC</h2>
          <ul>
            <li>Year-2015 to 2016</li>
            <li>Kalyana Sundaram Higher Secondary School</li>
            <li>Percentage - 90%</li>
          </ul>
        </MDBTabsPane>
      </MDBTabsContent>
      </div>
      <div className='project' id="projects">
        <center><h1 className='allheading'>Projects</h1></center><br/>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Academic Projects</Accordion.Header>
        <Accordion.Body style={{textAlign:'justify'}}>
          Title : Machine Learning Model for water quality prediction using Python and AI Framework.<br/>
          In this project,Predict the water quality using Machine learning and Auto Machine
          learning.In Machine learning used two algorithms Random forest and K-Nearest Neighbours
          algorithms.In Auto Machine learning used TPOT(Tree based pipeline oprimization tool).
          finally Compared the Machine learning and Auto Machine Learning,find which one get more 
          accuracy level and less time complexity.In Conclusion,Machine learning was better than
          Auto Machine learning based on accuracy level and time complexity.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Personal Projects</Accordion.Header>
        <Accordion.Body>
          In this Projects,I am created two small websites Using Html,Css,Javascript,Bootstrap and Reactjs.<br/>
          Website 1 : <a href='https://paintartist.netlify.app'>paintartist.netlify.app.</a><br/>
          Website 2 : <a href='https://mercedesbenzwebsite.netlify.app'>mercedesbenzwebsite.netlify.app</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div><br/><br/>
      <div id='skills'>
        <center><h1 className='allheading'>Skills</h1></center>
        <div className='progressbardiv'>
          <div className='progressbar'>
        <CircularProgressbar 
        value={HTML} 
        text={`${HTML}%`} 
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize:'120%',
          textColor:'white',
          pathColor:'white',
          trailColor:'rgb(243, 99, 123)',
          backgroundColor:'rgb(4, 158, 209)'
        })}/>
        <center><p className='progressbarfont'>HTML</p></center>
        </div>
        <div className='progressbar'>
        <CircularProgressbar 
        value={CSS} 
        text={`${CSS}%`} 
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize:'120%',
          textColor:'white',
          pathColor:'white',
          trailColor:'rgb(243, 99, 123)',
          backgroundColor:'rgb(4, 158, 209)'
        })}/>
        <center><p className='progressbarfont'>CSS</p></center>
        </div>
        <div className='progressbar'>
        <CircularProgressbar 
        value={Javascript} 
        text={`${Javascript}%`} 
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize:'120%',
          textColor:'white',
          pathColor:'white',
          trailColor:'rgb(243, 99, 123)',
          backgroundColor:'rgb(4, 158, 209)'
        })}/>
        <center><p className='progressbarfont'>Javascript</p></center>
        </div>
        </div>
        <div className='progressbardiv'>
          <div className='progressbar'>
        <CircularProgressbar 
        value={Bootstrap} 
        text={`${Bootstrap}%`} 
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize:'120%',
          textColor:'white',
          pathColor:'white',
          trailColor:'rgb(243, 99, 123)',
          backgroundColor:'rgb(4, 158, 209)'
        })}/>
        <center><p className='progressbarfont'>Bootstrap</p></center>
        </div>
        <div className='progressbar'>
        <CircularProgressbar 
        value={Reactjs} 
        text={`${Reactjs}%`} 
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize:'120%',
          textColor:'white',
          pathColor:'white',
          trailColor:'rgb(243, 99, 123)',
          backgroundColor:'rgb(4, 158, 209)'
        })}/>
        <center><p className='progressbarfont'>Reactjs</p></center>
        </div>
        <div className='progressbar'>
        <CircularProgressbar 
        value={java} 
        text={`${java}%`} 
        background
        backgroundPadding={6}
        styles={buildStyles({
          textSize:'120%',
          textColor:'white',
          pathColor:'white',
          trailColor:'rgb(243, 99, 123)',
          backgroundColor:'rgb(4, 158, 209)'
        })}/>
        <center><p className='progressbarfont'>Java</p></center>
        </div>
        </div>
      </div><br/>
        <center><h1 className='allheading'>Awards and Certificates</h1></center><br/>
        <div id='awards'>
        <Carousel>
      <Carousel.Item>
        <img src={img3}  className='carouselimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4}  className='carouselimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5}  className='carouselimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6}  className='carouselimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7}  className='carouselimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8}  className='carouselimg'/>
      </Carousel.Item>
    </Carousel>
      </div><br/><br/>
      <center><h5>All Credits MV Ⓒ 2023</h5></center>
    </div>
  );
}
export default App;

