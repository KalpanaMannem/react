import logo from './logo.svg';
// import './App.css';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
// import {Login} from './login/Login'
// import Register from './Register/index'
import {BeforeLogin} from './beforeLogin/BeforeLogin'
import {AfterLogin} from './afterLogin/AfterLogin'
import  React,{createContext, useEffect, useState} from 'react';
import {ctx} from './myContext'

const baseUrl='https://node1811.herokuapp.com/'
function App() {
  const [isLoggedin,setIsLoggedin]=useState(false)
  useEffect(()=>{
      let _isLoggedin=sessionStorage.isLogged;
      setIsLoggedin(_isLoggedin)

  },[])
  const fnUpdateLogin=(bool)=>{
    setIsLoggedin(bool)
  }
  return (
    <div className='App'>
     <ctx.Provider value={baseUrl}>
    <Header/>
    {isLoggedin ? <AfterLogin fnUpdateLogin={fnUpdateLogin}/> : <BeforeLogin fnUpdateLogin={fnUpdateLogin}/>}
    <Footer/>
    </ctx.Provider>
    </div>
  );
}

export default App;
