import React, { Component } from 'react'
import ListPatientService from '../services/ListPatientService';

export default class PatientDetails extends Component {
    constructor(props){
        super(props);
        var url = window.location.pathname;
        var id1 = url.substring(url.lastIndexOf('/') + 1);
        
        this.state={
          id:id1
        }
    }
    changeWeightClick=(event)=>{
       
        this.setState({weight:event.target.value})
      }

      changeHeightClick=(event)=>{
       
        this.setState({height:event.target.value})
      }
      changePulseClick=(event)=>{
       
        this.setState({pulse:event.target.value})
      }
      changeBloodOxygenClick=(event)=>{
       
        this.setState({bloodoxygen:event.target.value})
      }

      changePrescriptionClick=(event)=>{
       
        this.setState({prescription:event.target.value})
      }
      
      adddetails=(e)=>{
        e.preventDefault();
        
        let patientdetails={weight:this.state.weight,pulse:this.state.pulse,height:this.state.height,bloodoxygen:this.state.bloodoxygen,pid:this.state.id,prescription:this.state.prescription,did:localStorage.getItem("did")}
        console.log(patientdetails);
        ListPatientService.addPatientDetails(patientdetails);
        alert("Record inserted successfully");
       // window.location.href="/patient/getAllPatient";
      }
  render() {
  
    return (
      <div>
        <div className='form-group'>
            <label>Weight</label>
            <input type="number" className="form-control" onChange={this.changeWeightClick} name="weight" />
        </div>
        <div className='form-group'>
            <label>Height</label>
            <input type="number" className="form-control" onChange={this.changeHeightClick} name="weight" />
        </div>
        <div className='form-group'>
            <label>Pulse</label>
            <input type="number" className="form-control" onChange={this.changePulseClick} name="pulse" />
        </div>
        <div className='form-group'>
            <label>Blood Oxygen</label>
            <input type="number" className="form-control" onChange={this.changeBloodOxygenClick} name="bloodoxygen" />
        </div>
        <div className='form-group'>
            <label>Prescription</label>
            <textarea className="form-control" onChange={this.changePrescriptionClick} name="prescription"></textarea>
        </div>
        <br />
        <div className='form-group'>
            <button className='btn btn-success' type='button'  onClick={this.adddetails}>Add Patient Details</button>
        </div>
      </div>

    )
  }
}
