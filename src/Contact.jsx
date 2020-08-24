import React from "react";
import Common from "./Common";
import web from "../src/Images/s1.jpg";
import { useState } from "react";

const Contact=()=>{
   const[data,setdata]=useState({
      msg:"",
      username:"",
      password:"",
      email:""

   });

   const InputEvent=(event)=>{
      const{name,value}=event.target;
         
      setdata((prevail)=>{
         return{
              ...prevail,
              [name]:value,

         };

      });
       
   };

   const formSubmit=(e)=>{
           e.preventdefault();
   };

    return(
  <>
  <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
  </div>

  <div className="container contact_div">
             <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                           <div claa="mb-3">
                            <label htmlFor="exampleemail" class="form-label">Email Address</label>
                             <input type="email" class="form-control" id="exampleemail" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                           </div>

                           <div claa="mb-3">
                            <label htmlFor="examplepassword" class="form-label">Password</label>
                             <input type="password" class="form-control" id="examplepassword" name="password" value={data.password} onChange={InputEvent} placeholder="password"/>
                           </div>

                           <div claa="mb-3">
                            <label htmlFor="exampleuser" class="form-label">Username</label>
                             <input type="text" class="form-control" id="exampleuser" name="username" value={data.username} onChange={InputEvent} placeholder="name"/>
                           </div>

                           <div claa="mb-3">
                            <label htmlFor="examplemessage" class="form-label">Message</label>
                            <textarea class="form-control" id="examplemessage"  name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                           </div>
                           <br/>

                           <div class="col-12">
                             <button class="btn btn-outline-primary" type="Submit">Submit Form
                             </button>
                      </div>
                 </form>
               </div>
             </div>
           </div>
 
  </>
    );

};
export default Contact;