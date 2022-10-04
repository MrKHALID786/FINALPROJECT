import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ListPatientService from '../services/ListPatientService';



export default class ListPatientComponent extends Component {
    constructor(props){
        if(localStorage.getItem("pemail")==""){
        
            window.location.href="/patient/login";

        }
        super(props)
        this.state={
            patient:[]
        }
        this.addPatient=this.addPatient.bind(this);
        this.editPatient=this.editPatient.bind(this);
    }
    addPatient(){
    
        window.location.href="/patient/addPatient";
    }
    editPatient(id){
        window.location.href="/patient/updatePatient/"+id;
        
    }
    deletePatient(id){
        ListPatientService.deletePatient(id);
        window.location.href="/patient/getAllPatient";
        
    }
    patientdetails(id){
        window.location.href="/patient/patientdetails/"+id;
    }
    componentDidMount() {  
        
        ListPatientService.getPatient(localStorage.getItem("pid"))  
          .then(res => {  
            const patient = res.data;  
            console.log(patient);
            this.setState({ patient });  
          })  
      }  
 
 
render() {
    return (
      <div>
        
        {/* <Link to="/addPatient"><button className='btn btn-success'>Add Patient</button></Link> */}
        <h2 className='text-center'>Diagnostic Report</h2>
        
        <div className='row'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Patient First Name</th>
                        <th>Patient Last Name</th>
                        <th>Patient Email</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Flat No</th>
                        <th>Locality</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Details</th>
                        <th>Reports</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.patient.map(
                            patient =>
                            
                            <tr key={patient.id}>
                                <td>{patient.first_name}</td>
                                <td>{patient.last_name}</td>
                                <td>{patient.email_id}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.dob}</td>
                                <td>{patient.flatno}</td>
                                <td>{patient.locality}</td>
                                <td>{patient.city}</td>
                                <td>{patient.pincode}</td>
                                
                                <td><a href='/patient/patientreportsbyid'><button className='btn btn-warning'>View Reports</button></a></td>
                                <td><a href='/patient/patientdetailsbyid'><button className='btn btn-warning'>View Medical Details</button></a></td>
                                {/* <td><button onClick={()=>this.editPatient(patient.pid)} className="btn btn-warning">Edit</button></td>     */}
                                <td><button onClick={()=>this.deletePatient(patient.pid)} className="btn btn-danger">Delete</button></td>    
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
   
    )
  }
}