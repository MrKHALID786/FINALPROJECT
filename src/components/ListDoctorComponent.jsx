import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ListDoctorService from '../services/ListDoctorService';




export default class ListDoctorComponent extends Component {
    constructor(props){
        // if(localStorage.getItem("pemail")==""){
        
        //     window.location.href="/patient/login";

        // }
        super(props)
        this.state={
            doctor:[]
        }
        
    }
    
    deleteDoctor(id){
        ListDoctorService.deleteDoctor(id);
       alert("Record Deleted");
       window.location.href="/doctor/getDoctorById";
        
    }
    // doctordetails(id){
    //     window.location.href="/doctor/patientdetails/"+id;
    // }
    componentDidMount() {  
        ListDoctorService.getDoctor(localStorage.getItem("did"))  
          .then(res => {  

            console.log(localStorage.getItem("did"));
            const doctor = res.data;  
            console.log(doctor);
            this.setState({ doctor });  
          })  
      }  
 
 
render() {
    return (
      <div>
        
        {/* <Link to="/addPatient"><button className='btn btn-success'>Add Patient</button></Link> */}
        <h2 className='text-center'>Doctor List</h2>
        
        <div className='row'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Doctor First Name</th>
                        <th>Doctor Last Name</th>
                        <th>Doctor Email</th>
                        <th>City</th>
                        <th>College Name</th>
                        <th>Degree</th>
                        <th>Department Name</th>
                        <th>DOB</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.doctor.map(
                            doctor =>
                            <tr key={doctor.did}>
                                <td>{doctor.first_name}</td>
                                <td>{doctor.last_name}</td>
                                <td>{doctor.demail_id}</td>
                                <td>{doctor.city}</td>
                                <td>{doctor.collegename}</td>
                                <td>{doctor.degree}</td>
                                
                                <td>{doctor.department_name}</td>
                                <td>{doctor.dob}</td>
                                
                               <td><button onClick={()=>this.deleteDoctor(doctor.did)} className="btn btn-danger">Delete</button></td>    
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
