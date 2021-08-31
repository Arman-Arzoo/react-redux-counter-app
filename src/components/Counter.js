import React from 'react'
import {  useSelector,useDispatch} from 'react-redux';
import { increament,decreament } from '../action/counter'

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  // console.log("counter ",counter)
    return (
        <div className= "fluid-container ">
      <center><h1 className="pt-5">Welcome to counter App</h1></center>
      <div className= "main-container">
      <div className="container ">
        <center><h1 className="pt-4 mt-5">{counter}</h1></center>
        <div className="row">
          <div className="col-sm-6">
          <center> <button 
          onClick={()=>{dispatch(increament())}} 
          className="btn btn-primary mb-5 mt-5"><i className="fa fa-plus" aria-hidden="true"></i></button></center>
          </div>
          <div className="col-sm-6">
          <center> 
            <button 
            onClick={()=>{dispatch(decreament())}} 
            className="btn btn-primary mb-5 mt-5"><i className="fa fa-minus" aria-hidden="true"></i></button>
            </center>
          </div>
        </div>
      </div>
      <center><h4 className="pt-5">This Application is pure React-redux ... <span><a href="https://github.com/Arman-Arzoo/react-redux-counter-app">source code</a></span></h4></center>
      <center><h6 className="pt-3">Created by <a href="http://armani.unaux.com/">Arman ALi</a></h6></center>
      </div>
    </div>
    )
}
