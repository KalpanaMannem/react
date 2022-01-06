import React    from "react";
import template from "./Register.jsx";

class Register extends React.Component {
  constructor(){
    super();
    this.timeoutId=null;
    this.state={
      isUserExist:""
    }
  }
  
  fnChangeuid=(eve)=>{
    
    let uid=eve.target.value;
   
    clearTimeout(this.timeoutId)
    this.timeoutId= setTimeout(()=>{
    let htttpObj= new XMLHttpRequest;
   htttpObj.open('post',`http://localhost:2020/users/check-uid/${uid}`)
   htttpObj.send();
   htttpObj.onload=()=>{
     let res=htttpObj.responseText;
    this.setState({
      isUserExist:res==1?'t':'f'
    })

   }
   htttpObj.onerror=()=>{

   }

    },1000)
   
  }
  fnRegister=()=>{
    if(this.state.isUserExist=='t'){
      alert("user already existed");
      return;
    }
    const {uidRef,pwdRef,phoneRef,emailRef}=this.refs;
    let uid=uidRef.value;
    let pwd=pwdRef.value;
    let phone=phoneRef.value;
    let email=emailRef.value;
    let data={uid,pwd,phone,email}
    fetch('http://localhost:2020/users/reg',{
      method:'post',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res)=>{
        return res.json()
    })
    .then((response)=>{
        debugger;
        if(response.acknowledged && response.insertedId){
          alert('inserted');
        }else{
          alert('not inserted')
        }
    })
    .catch((response)=>{
        debugger;
        alert("something went wrong")
    })
  }
   fnSignup=(e)=>{
    e.preventDefault();
    this.props.fnToggleSignInSignUp(true);
}
  render() {
    return template.call(this);
  }
}

export default Register;
