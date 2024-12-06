import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration([regdata]) {
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const[name,setName]=useState();
const[mydata,setMyData]=useState();

  function getData(){
        e.preventDefault();
        console.log(name);
        const data={
          name,password,email
        }
    regdata(data);
    }
  return (
    <div>
     Registration
        <div>
        <form>
        <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)}  class="form-control" id="exampleInputName"  placeholder="Enter Name" />
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
  )
}

export default Registration