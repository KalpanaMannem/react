import "./Questions.css";
import React from "react";
import {Options} from './Options'

function template() {
  
  const {options}=this.state;
  const{que,ans,type}=this.state.queObj
  return (
    <div className="questions container-fluid">
      <h3 className='text-center mt-3 mb-4'>Question</h3>
     <div className='row mb-3'>
         <div className='col-5 text-end'>
             <b>Question:</b>
         </div>
         <div className='col-3'>
         <textarea value={que} id="que"onChange={this.fnChange} className="form-control" ></textarea>
         </div>
     </div>
     {
       options.map((v,i)=>{
          return <Options key={i}  fnPrepareOptions={ this.fnPrepareOptions} fnAddOptions={this.fnAddOptions} fnDeleteOptions={this.fnDeleteOptions} data={{v,i}}/>
       })
     }
     <div className='row mb-3'>
         <div className='col-5 text-end'>
             <b>Answer:</b>
         </div>
         <div className='col-3'>
         <select id="ans" onChange={this.fnChange}>
           <option>Please select</option>
           {
              this.ansOptions.map((v,i)=>{
                  return <option selected={ans==v} key={i}>{v}</option>
              })
           }
         </select>
         </div>
     </div>
     <div className='row mb-3'>
         <div className='col-5 text-end'>
             <b>Type:</b>
         </div>
         <div className='col-3'>
         <input name="type" checked={type=='S'} id="type" onChange={this.fnChange} type="radio" value="S"/>Single
         <input name="type" checked={type=='M'} id="type" onChange={this.fnChange} type="radio" value="M"/>Multii
         </div>
     </div>
     <div className='row mb-3'>
         <div className='offset-5 col-7'>
             <input onClick={this.fnSubmit} className='btn btn-primary'type="button" value="Submit"/>
             
         </div>
         
     </div>
     
    </div>
  );
};

export default template;
