import "./Register.css";
import React from "react";

function template() {
    const {isUserExist}=this.state
  return (
    <div className="register">
      <h3 className='text-center mt-3 mb-4'>Register</h3>
     <div className='row'>
         <div className='col-5 text-end'>
             <b>uid:</b>
         </div>
         <div className='col-3'>
             <input onChange={this.fnChangeuid.bind(this)}className='form-control' ref="uidRef"/>
         </div>
         <div className='col-4'>
             {isUserExist!="" && isUserExist=='t' ? <b className="text-danger">User not available</b> : <b className="text-success">User Available</b>}
         </div>
     </div>
     <div className='row mt-2'>
         <div className='col-5 text-end'>
             <b>password:</b>
         </div>
         <div className='col-3'>
             <input className='form-control' type="password" ref="pwdRef"/>
         </div>
     </div>
     <div className='row mt-2'>
         <div className='col-5 text-end '>
             <b>phone:</b>
         </div>
         <div className='col-3'>
             <input className='form-control' ref="phoneRef"/>
         </div>
     </div>
     <div className='row mt-2'>
         <div className='col-5 text-end'>
             <b>email:</b>
         </div>
         <div className='col-3'>
             <input className='form-control' ref="emailRef"/>
         </div>
     </div>
     <div className='row mb-3 mt-3'>
         <div className='offset-5 col-7'>
             <input onClick={this.fnRegister}className='btn btn-primary'type="button" value="Register"/>
             <b className='ms-3'>To Login <a onClick={this.fnSignup.bind(this)} href=''>Click here</a></b>
         </div>
         
     </div>
     
    </div>
  );
};

export default template;
