import React from 'react'
import DoctorLogin from '../services/DoctorService';
import { Link } from 'react-router-dom'
import "../CSS/Login.css"


export default class DLogin extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }
  changeEmailHandler=(event)=>{  
    this.setState({email:event.target.value})
  }

  changePasswordHandler=(event)=>{
    this.setState({password:event.target.value})
  }
  
  rlogin=(e)=>{
    let loginUser={demailId:this.state.email,
      dpassword:this.state.password};
    DoctorLogin.login(loginUser).then((res) => {  
      let patient = res.data;  
      const ddata=JSON.stringify(patient);
      const jsondata=JSON.parse(ddata);
      //localStorage.setItem("demail",jsondata[0].demailId);
      localStorage.setItem("did",jsondata[0].did);
      console.log(localStorage.getItem("did"));

      window.location.href="/patient/getAllPatient";

    });
    
  }
  render() {
    return (

      <div className="container-fluid login">
      <div className="row justify-content-center align-items-center" style={{ height: "98vh" }}>
      <div className="col-4 p-5 shadow-lg bg-light">
          {/* on submitting the form signinUserHandler function will be called */}
           <h1 className='text-center pb-4 text-warning'>Doctor Login </h1>
          {/* onchange will set the values to the above useStateHook */}

                          <div className="mb-3">
                              <input type="email" name="email" 
                              className="form-control form-control-md" 
                              placeholder="E-mail" onChange={this.changeEmailHandler} required />
                          </div>
              <div className="mb-3">
                              <input type="password" name="password" 
                              className="form-control form-control-md" 
                              placeholder="***********" onChange={this.changePasswordHandler} required />
               </div>
                          
              <div className="mb-3 text-center">                          
                          
               </div>

               <div className="mb-3 text-center">
                              <button className="btn btn-primary btn-sm"
                               style={{padding: 10, width:200, fontWeight:'bold'}
                               } onClick={this.rlogin}
                               >Login</button>
               </div>


              <div className='text-center mb-3 '>
                              <Link to="">
                                  <span className='text-secondary'>Forget Password</span>
                              </Link>
               </div>
                          {/* redirect us to the registration page */}
              <div className="mb-2 text-center">
                              <span>Not a user? <Link to="/doctor/addDoctor"
                               className="text-warning" >Register here</Link>
                              </span>
                          </div>
    </div>
    </div>
    </div>
      
    )
  }
}
