import React, { Component } from 'react'

import ListPatientService from '../services/ListPatientService';


export default class UpdatePatientComponent extends Component {
  
  constructor(props){
    super(props)
   
    var url = window.location.pathname;
    var id1 = url.substring(url.lastIndexOf('/') + 1);
    
    this.state={
      id:id1,
      firstName:"",
      lastName:"",
      address:"",
      emailId:""
    }
   

  }


  componentDidMount() {  
    
    ListPatientService.getPatientById(this.state.id)  
          .then((res) => {  
            let patient = res.data;  
            const ddata=JSON.stringify(patient);
            const parseData=JSON.parse(ddata);
            this.setState({firstName:parseData[0].first_name});
            this.setState({lastName:parseData[0].last_name});
            this.setState({emailId:parseData[0].email_id});
            this.setState({address:parseData[0].address});
          });
  }  
  
  changeFirstNameHandler=(event)=>{
    this.setState({firstName:event.target.value});
  }
  changeLastNameHandler=(event)=>{
    this.setState({lastName:event.target.value});
  }
  changeAddressHandler=(event)=>{
    this.setState({address:event.target.value});
  }
  changeEmailHandler=(event)=>{
    this.setState({emailId:event.target.value});
  }
  changeAddressHandler=(event)=>{
    this.setState({emailId:event.target.value});
  }
 
    updatePatientById=(e)=>{
        e.preventDefault();
     
        let patient={firstName:this.state.firstName,lastName:this.state.lastName,address:this.state.address};
        ListPatientService.updatePatientById(patient,this.state.id);
      }
      
  render() {
    
    return (
     
        <div className='container'>
          <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'> Edit Patient Details</h3>
              <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label>First Name:</label>
                      <input placeholder='Enter First Name' name='firstName' className='form-control' onChange={this.changeFirstNameHandler} value={this.state.firstName} />
                    </div>
                    
                    <div className='form-group'>
                      <label>Last Name:</label>
                      <input placeholder='Enter Last Name' name='lastName' className='form-control' onChange={this.changeLastNameHandler} value={this.state.lastName} />
                    </div>
                    <div className='form-group'>
                      <label>Address</label>
                      <input placeholder='Enter Address' name='address' className='form-control' onChange={this.changeAddressHandler} value={this.state.address} />
                    </div>

                    <div className='form-group'>
                      <label>Email</label>
                      <input placeholder='Enter Email' name='email' className='form-control' onChange={this.changeEmailHandler} value={this.state.emailId} />
                    </div>
                    
                   <br></br>
                   <div className='form-group'>
                    <button className='btn btn-success' onClick={this.updatePatientById}>Update Patient</button>
                   </div>

                  

                 </form>
             </div>
         </div>
        </div>
     </div>
      
    )
  }
}

