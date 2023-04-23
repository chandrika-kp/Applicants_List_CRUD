import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contacts from './components/contacts';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import NotFound from './components/NotFound';
import AddNew from './components/Applicants/AddNew';
import EditUsers from './components/Applicants/EditUsers';
import ApplicantDetail from './components/Applicants/ApplicantDetail';

function App() {
  return (
    <Router>
      
       <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contacts/>} />
          <Route exact path="/applicants/add" element={<AddNew/>} />
          <Route exact path="/applicants/edit/:id" element={<EditUsers/>} />
          <Route exact path="/applicants/:id" element={<ApplicantDetail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

    </Router>
  );
}

export default App;
