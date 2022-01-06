import React    from "react";
import template from "./Questions.jsx";
import axios from "axios";


class Questions extends React.Component {
  constructor(){
    super();
    this.state={
      options:["",""],
      queObj:{
        que:"",
        options:["",""],
        ans:"Please select",
        type:"M"
        
      }
    }
    this.ansOptions=["A","B","C","D","AB","AC","AD","BC","BD","CD","ABC","ABD","BCD","ABCD"]
    this.fnAddOptions= this.fnAddOptions.bind(this)
    this.fnDeleteOptions=this.fnDeleteOptions.bind(this)
    this.fnPrepareOptions=this.fnPrepareOptions.bind(this)
  }
  fnPrepareOptions(val,ind){
    
    let _currentOptions=this.state.options ;
    _currentOptions.splice(ind,1,val)
    this.setState({
      options:_currentOptions,
      queObj:{
        ...this.state.queObj,
        options:_currentOptions
      }
    })
  }
  fnAddOptions(){
   let _currentOptions=this.state.options
    if(_currentOptions.length==4)
    return;
  _currentOptions.push("")
   this.setState({
      options:_currentOptions
    })
    }
    fnDeleteOptions(ind){
      debugger;
      let _currentOptions=this.state.options
      if(_currentOptions==2)return;
      _currentOptions.splice(ind,1)
      this.setState({
        options:_currentOptions
      })
    }
    fnChange=(eve)=>{
      let val=eve.target.value;
      let key=eve.target.id;
      this.setState({
        queObj:{
          ...this.state.queObj,
          [key]:val
        }
      })
    }

    fnSubmit=()=>{
      debugger;
     let dataObj={
      queObj:this.state.queObj
     }
    axios.post('http://localhost:2020/que/insert-que1',dataObj)
    .then((res)=>{
      console.log(res);
      if(res.data.acknowledged && res.data.insertedId){
        alert("success")
        this.setState({
          options:["",""],
      queObj:{
        que:"ss",
        options:["",""],
        ans:"AB",
        type:"M"
      }
          
        })
      }else{
        alert("fail")
      }
    })
    .catch((res)=>{
      console.log(res);
    })
    }
  render() {
    return template.call(this);
  }
}

export default Questions;
