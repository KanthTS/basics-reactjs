import './Ass.css';
import { useState } from 'react';

function Asse() {
 
  let [a,setA]=useState({
    fullname:'',
    email:'',
    password:'',
    phone:''

  });
  let [sub,setSub]=useState(null);
  function handleChange(e)
  {
   let {name,value}=e.target;
   setA({...a,[name]:[value]});
  
  }
  function handleSubmit(e)
  {
    e.preventDefault();

   setSub(a);
  }

  return (
    <div className="con">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="char">
        <div className="row">
          <label htmlFor="fullname">Full Name:</label>
          <input 
            type="text" 
            id="fullname" 
            name="fullname" 
            required 
            value={a.fullname}
            onChange={handleChange}
           
          />
        </div>

        <div className="row">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={a.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="row">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={a.password} 
            onChange={handleChange} 
          />
        </div>

        <div className="row">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            value={a.phone} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit " className="text-primary">Register</button>
       
      </form>
      {
          sub &&(
            <div className="tab">
              <h3>Submitted Data:</h3>
              <p>Full Name: {sub.fullname}</p>
          <p>Email: {sub.email}</p>
          <p>Password: {sub.password}</p>
          <p>Phone: {sub.phone}</p>
            </div>
          )
        }
    </div>
  );
}

export default Asse;
