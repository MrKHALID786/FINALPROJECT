import React, { Component } from 'react'
import ListPathalogyService from '../services/ListPathalogyService';

export default class Report extends Component {
  constructor(props){
    super(props)
    var url = window.location.pathname;
        var id1 = url.substring(url.lastIndexOf('/') + 1);
        
        this.state={
          id:id1
        }
   

  }
  changeDataNameHandler=(event)=>{
    this.setState({dataname:event.target.value})
  }
  changeDataValueHandler=(event)=>{
    this.setState({datavalue:event.target.value})
  }
  
  
  
  saveDoctor=(e)=>{
    e.preventDefault();
    let data1={value:this.state.datavalue,data:this.state.dataname,pathalogyid:localStorage.getItem("pathid"),pid:this.state.id}
    console.log(data1);
    ListPathalogyService.addData(data1);
   // window.location.href="/doctor/dlogin"
  }
  render() {
    return (
      <div className='container'>
         <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Report</h3>
              <div className='card-body'>
                  <form>
                    
                  
                    <div className='form-group'>
                    <label>Choose Report</label>
                    <select name="dataname" value={this.state.dataname} className="form-control" onChange={this.changeDataNameHandler}>
                       <option>--Choose Report--</option>
                       <option value="HB">HB</option>
                       <option value="WBC">WBC</option>      
                    </select>
                    </div>

                    <div className='form-group'>
                      <label>Value</label>
                      <input placeholder='Enter Value' type='text' name='datavalue' className='form-control' value={this.state.datavalue} onChange={this.changeDataValueHandler}/>
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
