import React from 'react'
import {ctx} from '../../myContext'

export const Login=(props)=>{
   const uid= React.createRef();
   const pwd= React.createRef();
   const ctxData=React.useContext(ctx);
   const fnLogin=()=>{
       debugger;
       let u=uid.current.value;
       let p=pwd.current.value;
      
     var httpObj=  new XMLHttpRequest();
     httpObj.open('post',`${ctxData}users/login/${u}?pwd=${p}`);
     httpObj.send();
     httpObj.onload=()=>{
         debugger;
         
         let res=httpObj.responseText
         res=JSON.parse(res);
         if(res.length>0){
             
        sessionStorage.role=window.btoa(res[0].role);
        sessionStorage.name=res[0].uid;
        sessionStorage.isLogged=true;
        props.fnUpdateLogin(true)
         }else{
            sessionStorage.isLogged=false;
            alert('please check userid and password')
            
         }
     }
     httpObj.onerror=()=>{
         debugger;
        alert('something went wrong')
     }

   }
    const fnSignup=(e)=>{
        e.preventDefault();
        props.fnToggleSignInSignUp();
    }
return(
    <div>
     <h3 className='text-center mt-3 mb-4'>Login</h3>
     <div className='row mb-3'>
         <div className='col-5 text-end'>
             <b>uid:</b>
         </div>
         <div className='col-3'>
             <input className='form-control' ref={uid}/>
         </div>
     </div>
     <div className='row mb-3'>
         <div className='col-5 text-end'>
             <b>password:</b>
         </div>
         <div className='col-3'>
             <input className='form-control' type="password" ref={pwd}/>
         </div>

     </div>
     <div className='row mb-3'>
         <div className='offset-5 col-7'>
             <input onClick={fnLogin} className='btn btn-primary'type="button" value="login"/>
             <b className='ms-3'>To signup<a onClick={fnSignup} href=''>Click here</a></b>
         </div>
         
     </div>
     
     
    </div>
)
}