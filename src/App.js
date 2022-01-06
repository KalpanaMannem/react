import logo from './logo.svg';
// import './App.css';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
// import {Login} from './login/Login'
// import Register from './Register/index'
import {BeforeLogin} from './beforeLogin/BeforeLogin'
import {AfterLogin} from './afterLogin/AfterLogin'
import  React,{createContext, useEffect, useState} from 'react';

const baseUrl='http://localhost:2020/'
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
     
    <Header/>
    {isLoggedin ? <AfterLogin fnUpdateLogin={fnUpdateLogin}/> : <BeforeLogin fnUpdateLogin={fnUpdateLogin}/>}
    <Footer/>
    </div>
  );
}

export default App;
