import './App.css';
import ListPatientComponent from './components/ListPatientComponent';
import ListPatientComponentById from './components/ListPatientComponentById';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Routes, useParams} from 'react-router-dom'
import CreatePatientComponent from './components/CreatePatientComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import Login from './components/Login';
import Doctor from './components/Doctor';
import PatientDetails from './components/PatientDetails';
import PatientDetailsById from './components/PatientDetailsById';
import CreateDoctorComponent from './components/CreateDoctorComponent';
import CreatePathalogy from './components/CreatePathalogy';
import FirstPage from './components/FirstPage';
import PathLogin from './components/PathLogin';
import Report from './components/Report';
import ListPatientComponentPathalogy from './components/ListPatientComponentPathalogy';
import PatientReportsById from './components/PatientReportsById';
import ListDoctorComponent from './components/ListDoctorComponent';
import Logout from './components/Logout';
import AdminLogin from './components/AdminLogin';
import AdminDetailsComponent from './components/AdminDetailsComponent';
import AdminDoctorDetailsComponent from './components/AdminDoctorDetailsComponent';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      {/* <header> */}
      {/* <HeaderComponent /> */}

        <Router>
          <Routes>
            <Route path="" element={<><Header /> <FirstPage /><Footer/></>} />
            <Route path="/admin/details" element={<AdminDetailsComponent />} />
            <Route path="/admin/doctor" element={<AdminDoctorDetailsComponent />} />
            <Route path="/admin" element={<><Header /> <AdminLogin /><Footer/></>} />
            <Route path="/pathalogy/report/:id" element={<Report />} />
            <Route path="/pathalogy/pathlogin" element={<><Header /><PathLogin /><Footer/></>} />
            <Route path="/pathalogy/addPathalogy" element={<CreatePathalogy />} />
            <Route path="/pathalogy/getAllPatientPathalogy" element={<ListPatientComponentPathalogy />} />
            <Route path="/doctor/addDoctor" element={<CreateDoctorComponent />} />
            <Route path="/doctor/dlogin" element={<><Header /><Doctor /><Footer/></>} />
            <Route path="/doctor/getDoctorById" element={<ListDoctorComponent />} />           
            <Route path="/patient/getAllPatient" element={<ListPatientComponent />} />
            <Route path="/patient/getAllPatientById" element={<ListPatientComponentById />} />
            <Route path="/patient/addPatient" element={<CreatePatientComponent />} />
            <Route path="/patient/login" element={<><Header /><Login /><Footer/></>} />
            <Route path="/patient/logout" element={<Logout />} />
            <Route path="/patient/updatePatient/:id" element={<UpdatePatientComponent />} />
            <Route path="/patient/patientdetails/:id" element={<PatientDetails />} />
            <Route path="/patient/patientdetailsbyid" element={<PatientDetailsById />} />
            <Route path="/patient/patientreportsbyid" element={<PatientReportsById />} />
          </Routes>
        </Router>

      {/* </header> */}
    </div>
  );
}


export default App;
