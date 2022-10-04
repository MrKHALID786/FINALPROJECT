import React, { Component } from 'react'
import ListPathalogyService  from '../services/ListPathalogyService'

export default class CreatePathalogy extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
   

  }
  changePathalogyNameHandler=(event)=>{
    this.setState({pathalogyname:event.target.value})
  }
  changeEmailIdHandler=(event)=>{
    this.setState({emailId:event.target.value})
  }
  changePasswordHandler=(event)=>{
    this.setState({password:event.target.value})
  }
  changeAddressHandler=(event)=>{
    this.setState({address:event.target.value})
  }
  changeMobileNoHandler=(event)=>{
    this.setState({mobileno:event.target.value})
  }
  
  savePathalogy=(e)=>{
    e.preventDefault();
    let pathalogy={pathalogyname:this.state.pathalogyname,emailId:this.state.emailId,password:this.state.password,mobileno:this.state.mobileno,address:this.state.address}
    console.log(pathalogy);
    ListPathalogyService.addPathalogy(pathalogy);
    window.location.href="/pathalogy/pathlogin"
  }
  render() {
    return (
      <div className='container'>
         <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Create Pathalogy</h3>
              <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label>Pathalogy Name:</label>
                      <input placeholder='Enter Pathalogy Name' name='pathalogyname' className='form-control' value={this.state.pathalogyname} onChange={this.changePathalogyNameHandler} />
                    </div>
                    

                    <div className='form-group'>
                      <label>Email Id:</label>
                      <input placeholder='Enter Email Id' name='emailId' className='form-control' value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Password</label>
                      <input placeholder='Enter Password' type='password' name='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Mobile No:</label>
                      <input placeholder='Enter Mobile No' name='mobileno' className='form-control' value={this.state.mobileno} onChange={this.changeMobileNoHandler}/>
                    </div>

                    <div className='form-group'>
                      <label>Address:</label>
                      <textarea name='address' className='form-control' value={this.state.address} onChange={this.changeAddressHandler}></textarea>
                    </div>
                    <button className='btn btn-success' onClick={this.savePathalogy}>Save</button>

                  </form>
              </div>
          </div>
         </div>
      </div>

      
    )
  }
}
