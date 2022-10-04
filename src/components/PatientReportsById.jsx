import React, { Component } from 'react'
import ListPatientService from '../services/ListPatientService';

export default class PatientReportsById extends Component {
    constructor(props){
        super(props);
        this.state={
          patient:[]
      }
    }
    componentDidMount() {  
        
      ListPatientService.getAllPatientReportsById(localStorage.getItem("pid")) 
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
      <h2 className='text-center'>Report</h2>
      
      <div className='row'>
          <table className='table'>
              <thead>
                  <tr>
                      <th>Parameter</th>
                      <th>Value</th>
                      <th>Date</th>
                    
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.patient.map(
                          patient =>
                          <tr key={patient.pdid}>
                              <td>{patient.data}</td>
                              <td>{patient.value}</td>
                              <td>{patient.ddate}</td>
                              
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
