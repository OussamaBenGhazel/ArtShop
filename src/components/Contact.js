import React, { useState } from 'react'
import {getDatabase,ref,set} from 'firebase/database';

export default function Contact(props) {
const [Name,setName]=useState("");
const [lastName,setLastName]=useState("");
const [addresse,setAdresse]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [city,setCity]=useState("");
const [zip,setZip]=useState("");
const [comment,setComment]=useState("");
const db = getDatabase();

const addcommenttodb=(obj)=>{
  let CommentReference = ref(db,props.DBRef+`/${Math.floor(Math.random()*1000).toString()}`);
set(CommentReference,obj); 
}

const contactprocess = (e)=>{
  e.preventDefault();
  // control de saisie:
  if(
    (Name.trim().length <=2)||(lastName.trim().length<=2)||
    (addresse.trim().length <=2)||(email.trim().length <=2)||
    (phone.trim().length!==8)||(city.trim().length<=2)||
    (zip.trim().length<=2)||(comment.trim().length <=2)
    ){alert("Oops,error occured...") ; return 0 }
  //creation d'objet :
  const user = {
    Name,
    lastName,
    addresse,
    email,
    city,
    phone,
    zip,
    comment,
    order : props.order || 'no-order'
  }
  //stocker in base :
  addcommenttodb(user);
  //clear form and alert user
  document.getElementById("contact-form").reset();
  alert("Message/Order confiremed..");
}

  return (
    <div>
  <div>
    <form className="row g-3" id='contact-form'>
      <div className="col-md-6">
        <label htmlFor="inputName1" className="form-label">Name</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="inputName1" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputLastName2" className="form-label">LastName</label>
        <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control" id="inputLastName2" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhone3" className="form-label">Phone</label>
        <input onChange={(e)=>setPhone(e.target.value)} type="text" className="form-control" id="inputPhone3" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="inputEmail4" />
      </div>
     
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input onChange={(e)=>setAdresse(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input onChange={(e)=>setCity(e.target.value)} type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input onChange={(e)=>setZip(e.target.value)} type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputComments" className="form-label">Comments</label>
        <input onChange={(e)=>setComment(e.target.value)} type="text" className="form-control" id="inputComments" />
      </div>
      <div className="col-12">
        <button onClick={contactprocess} type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
  
</div>
  )
}
