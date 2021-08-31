import React from 'react'
import {  useSelector,useDispatch} from 'react-redux';
import { increament,decreament } from '../action/counter'

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  // console.log("counter ",counter)
    return (
        <div className= "fluid-container super-main ">
      <center><h1 className="pt-5">Welcome to Armani counter </h1></center>
      <div className= "main-container">
      <div className="container ">
        <center><h1 className="mt-5">{counter}</h1></center>
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
      </div>
    </div>
    )
}
