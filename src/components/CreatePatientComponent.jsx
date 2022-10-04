import React, { Component } from 'react'
import ListPatientService from '../services/ListPatientService'

export default class CreatePatientComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      password:""
    }
   

  }
  changeFirstNameHandler=(event)=>{
    this.setState({firstName:event.target.value})
  }
  changeLastNameHandler=(event)=>{
    this.setState({lastName:event.target.value})
  }
  changeEmailHandler=(event)=>{
    this.setState({email:event.target.value})
  }
  changeAddressHandler=(event)=>{
    this.setState({address:event.target.value})
  }
  changeDobHandler=(event)=>{
    this.setState({dob:event.target.value})
  }
  changePasswordHandler=(event)=>{
    this.setState({password:event.target.value})
  }
  changeGenderHandler=(event)=>{

    this.setState({gender:event.target.value})
  }
  changeFlatnoHandler=(event)=>{
    this.setState({flatno:event.target.value})
  }
  changeLocalityHandler=(event)=>{
    this.setState({locality:event.target.value})
  }
  changeCityHandler=(event)=>{
    this.setState({city:event.target.value})
  }
  changePincodeHandler=(event)=>{
    this.setState({pincode:event.target.value})
  }
  savePatient=(e)=>{
    e.preventDefault();
    if(this.state.firstName==""){
      alert("Enter First Name");
    }
    
    else if(this.state.lastName==""){
      alert("Enter Last Name");
    }
    else if(this.state.email==""){
      alert("Enter Email ID");
    }
    else if(this.state.password==""){
      alert("Enter Password");
    }
    else{
    let patient={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.email,dob:this.state.dob,password:this.state.password,gender:this.state.gender,flatno:this.state.flatno,locality:this.state.locality,city:this.state.city,pincode:this.state.pincode}
    ListPatientService.addPatient(patient);
    window.location.href="/patient/login";
    }
  }
  render() {
    return (
      <div className='container'>
         <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Patient</h3>
              <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label>First Name:</label>
                      <input placeholder='Enter First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                    </div>
                    <div className='form-group'>
                      <label>Last Name:</label>
                      <input placeholder='Enter Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                    </div>
                    <div className='form-group'>
                      <label>Email Id:</label>
                      <input placeholder='Enter Email' type='email' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler}/>
                    </div>
                    <div className='form-group'>
                      <label>Date Of Birth</label>
                      <input placeholder='Enter Date Of Birth' name='dob' className='form-control' type="date" value={this.state.dob} onChange={this.changeDobHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input placeholder='Enter Password' name='password' className='form-control' type="password" value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Flat No</label>
                      <input placeholder='Enter Flat No' name='flatno' className='form-control' type="int" value={this.state.flatno} onChange={this.changeFlatnoHandler}/>
                    </div>
                    <div className='form-group'>
                      <label>Locality</label>
                      <input placeholder='Enter Locality' name='locality' className='form-control' value={this.state.locality} onChange={this.changeLocalityHandler}/>
                    </div>
                    <div className='form-group'>
                      <label>Pin Code</label>
                      <input placeholder='Enter Pin Code' name='pincode' className='form-control' value={this.state.pincode} onChange={this.changePincodeHandler}/>
                    </div>
                    <div className='form-group'>
                      <label>City</label>
                      <input placeholder='Enter City' name='city' className='form-control' value={this.state.city} onChange={this.changeCityHandler}/>
                    </div>
                  
                    
                    <div className='form-group'>
                    <label>Gender</label>
                    <select name="gender" value={this.state.gender} className="form-control" onChange={this.changeGenderHandler}>
                       <option>--Choose Gender--</option>
                       <option value="male">Male</option>
                       <option value="female">Female</option>      
                    </select>
                    </div>
                    <br />
                    <button className='btn btn-success' onClick={this.savePatient}>Save</button>

                  </form>
              </div>
          </div>
         </div>
      </div>

      
    )
  }
}
