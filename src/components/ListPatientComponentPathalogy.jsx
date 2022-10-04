import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ListPatientService from '../services/ListPatientService';


export default class ListPatientComponentPathalogy extends Component {
    constructor(props){
        
        if(localStorage.getItem("pathemail")==""){
        
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
        window.location.href="/pathalogy/report/"+id;
    }
    componentDidMount() {  
        
        ListPatientService.getAllPatient() 
          .then(res => {  
            const patient = res.data;  
            this.setState({ patient });  
          })  
      }  
 
 
render() {
    return (
      <div>
        
        <h2 className='text-center'>Patient List</h2>
        
        <div className='row'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Patient First Name</th>
                        <th>Patient Last Name</th>
                        <th>Patient Email</th>
                       
                        <th>Add Patient Details</th>
                        {/* <th>Edit</th> */}
                        {/* <th>Delete</th> */}
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
                               
                                <td><button onClick={()=>this.patientdetails(patient.pid)} className="btn btn-warning">Add Pathology Details</button></td>    
                                {/* <td><button onClick={()=>this.editPatient(patient.pid)} className="btn btn-warning">Edit</button></td>     */}
                                {/* <td><button onClick={()=>this.deletePatient(patient.pid)} className="btn btn-danger">Delete</button></td>     */}
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
