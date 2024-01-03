import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Aboutus from './Aboutus';
import Termsandconditions from './Termsandconditions';
import Payment from './Payment';
import Contactus from './Contactus';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Page1/>} />
          <Route path="/page2" element={< Page2/>} />
          <Route path="/page3" element={< Page3/>} />
          <Route path="/page4" element={< Page4/>} />
          <Route path="/Aboutus" element={< Aboutus/>} />
          <Route path="/Termsandconditions" element={< Termsandconditions/>} />
          <Route path="/Payment" element={< Payment/>} />
          <Route path="/Contactus" element={< Contactus/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
