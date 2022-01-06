import React    from "react";
import template from "./Result.jsx";
// import $ from 'jquery'
import axios from 'axios'

class Result extends React.Component {
  constructor(){
    super();
    this.state={
      result :[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:2020/results/get-result/'+window.sessionStorage.name)
    .then((res)=>{
      this.setState({
        result:res.data.reverse()
      })
    })
    .catch(()=>{

    })
  }
  render() {
    return template.call(this);
  }
}

export default Result;
