import React, { Component } from 'react'
import ListDoctorService  from '../services/ListDoctorService'

export default class CreateDoctorComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      emailId:"",
      dpassword:""
      
    }
   

  }
  changeFirstNameHandler=(event)=>{
    this.setState({firstName:event.target.value})
  }
  changeLastNameHandler=(event)=>{
    this.setState({lastName:event.target.value})
  }
  
  changeEmailIdHandler=(event)=>{
    this.setState({emailId:event.target.value})
  }

  changeCityHandler=(event)=>{
    this.setState({city:event.target.value})
  }
  changeCollegeNameHandler=(event)=>{
    this.setState({collegeName:event.target.value})
  }
  changeDegreeHandler=(event)=>{
    this.setState({degree:event.target.value})
  }

  changeDepartmentNameHandler=(event)=>{
    this.setState({departmentName:event.target.value})
  }
  changeDOBHandler=(event)=>{
    this.setState({dob:event.target.value})
  }
  changePasswordHandler=(event)=>{
    this.setState({dpassword:event.target.value})
  }
  
  saveDoctor=(e)=>{
    e.preventDefault();

    if(this.state.firstName==""){
      alert("Enter First Name");
    }
    
    else if(this.state.lastName==""){
      alert("Enter Last Name");
    }
    else if(this.state.emailId==""){
      alert("Enter Email ID");
    }
    else if(this.state.dpassword==""){
      alert("Enter Password");
    }
    else{
    
    let doctor={firstName:this.state.firstName,lastName:this.state.lastName,demailId:this.state.emailId,city:this.state.city,collegename:this.state.collegeName,degree:this.state.degree,departmentName:this.state.departmentName,dob:this.state.dob,dpassword:this.state.dpassword}
    ListDoctorService.addDoctor(doctor);
    window.location.href="/doctor/dlogin"
    }
  }
  render() {
    return (
      <div className='container'>
         <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Doctor</h3>
              <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label>First Name:</label>
                      <input placeholder='Enter First Name' required='required'  name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                    </div>
                    <div className='form-group'>
                      <label>Last Name:</label>
                      <input placeholder='Enter Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Email Id:</label>
                      <input placeholder='Enter Email Id' name='emailId' className='form-control' value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input placeholder='Enter Password' type='password' name='dpassword' className='form-control' value={this.state.dpassword} onChange={this.changePasswordHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Date Of Birth</label>
                      <input placeholder='Enter DOB' name='date' type='date' className='form-control' value={this.state.dob} onChange={this.changeDOBHandler}/>
                    </div>
                  
                    <div className='form-group'>
                    <label>Choose City</label>
                    <select name="city" value={this.state.city} className="form-control" onChange={this.changeCityHandler}>
                       <option>--Choose City--</option>
                       <option value="Nashik">Nashik</option>
                       <option value="Pune">Pune</option>      
                    </select>
                    </div>

                    <div className='form-group'>
                    <label>Choose College Name</label>
                    <select name="collegeName" value={this.state.collegeName} className="form-control" onChange={this.changeCollegeNameHandler}>
                       <option>--Choose College Name--</option>
                       <option value="CDAC-1">CDAC-1</option>
                       <option value="CDAC-2">CDAC-2</option>      
                    </select>
                    </div>

                    <div className='form-group'>
                    <label>Choose Degree Name</label>
                    <select name="degree" value={this.state.degree} className="form-control" onChange={this.changeDegreeHandler}>
                       <option>--Choose Degree Name--</option>
                       <option value="MBBS">MBBS</option>
                       <option value="MS">MS</option>      
                    </select>
                    </div>
                    <div className='form-group'>
                    <label>Choose Department Name</label>
                    <select name="departmentName" value={this.state.departmentName} className="form-control" onChange={this.changeDepartmentNameHandler}>
                       <option>--Choose Department Name--</option>
                       <option value="Medical">Medical</option>
                       <option value="Medicine">Medicine</option>     
                    </select>
                    </div>
                    <button className='btn btn-success' onClick={this.saveDoctor}>Save</button>

                  </form>
              </div>
          </div>
         </div>
      </div>

      
    )
  }
}
