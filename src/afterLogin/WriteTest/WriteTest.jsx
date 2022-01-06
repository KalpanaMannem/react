import "./WriteTest.css";
import React from "react";

function template() {
  const {questions,isTestSubmitted,timeLeft}=this.state
  const ansOptArr=['A','B','C','D']
  return (
    <div className="write-test">
      {
        questions.map((obj,index)=>{
          return <div key={index} className="ms-2">
            <h4>{index+1}.{obj.que}</h4>
            {
              obj.options.map((v,i)=>{
                  return <p key={i}>{obj.type=='S' ? 
                   <input disabled={isTestSubmitted} onChange={this.fnAnschange} value={ansOptArr[i]} name={obj._id} type="radio"/> : 
                  <input disabled={isTestSubmitted} onChange={this.fnAnschange} value={ansOptArr[i]}  name={obj._id} type='checkbox'/> }{v}</p>
              })
            }
          </div>
        })
      }
     { !isTestSubmitted && <p><input onClick={this.fnSubmit.bind(this)} className="btn btn-primary" type="button" value="submit"></input></p>}
     <h1 className="time-left">{timeLeft}</h1>
    </div>
  );
};

export default template;
