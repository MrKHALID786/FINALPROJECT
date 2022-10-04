import React, { Component } from 'react'
import ListPatientService from '../services/ListPatientService';

export default class PatientDetailsById extends Component {
    constructor(props){
        super(props);
        this.state={
          patient:[]
      }
    }
    componentDidMount() {  
        
      ListPatientService.getAllPatientDetailsById(localStorage.getItem("pid")) 
        .then(res => {  
          
          const patient = res.data;  
          console.log(patient);
          this.setState({ patient });  
          console.log(this.state.patient.pulse);
        })  
    }  
  render() {
  
    return (
      <div>
        
      {/* <Link to="/addPatient"><button className='btn btn-success'>Add Patient</button></Link> */}
      <h2 className='text-center'>Patient List</h2>
      
      <div className='row'>
          <table className='table'>
              <thead>
                  <tr>
                      <th>Pulse</th>
                      <th>Blood Oxygen</th>
                      <th>Weight</th>
                      <th>Height</th>
                      <th>Prescription</th>
                      <th>Doctor Name</th>
                      <th>Date</th>
                    
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.patient.map(
                          patient =>
                          <tr key={patient.pdid}>
                              <td>{patient.pulse} BPM</td>
                              <td>{patient.bloodoxygen} %</td>
                              <td>{patient.weight} KG</td>
                              <td>{patient.height} CM</td>
                              <td>{patient.prescription}</td>
                              <td>{patient.first_name} {patient.last_name}</td>
                              <td>{patient.ddate} </td>
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
