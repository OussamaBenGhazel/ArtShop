import React, { useState } from 'react'
import {getDatabase,ref,set} from 'firebase/database';

export default function AddWork() {
  const [Title,setTitle] = useState("");
  const [Description,setDescription] = useState("");
  const [Price,setPrice] = useState("30");
  const [Picture,setPicture] = useState(
    "https://thumbs.dreamstime.com/z/aucune-photo-ou-ic%C3%B4ne-d-image-vide-chargement-images-marque-manquante-non-disponible-%C3%A0-venir-silhouette-nature-simple-dans-l-215973362.jpg"
    );
  const Addnewworktodb =(Title,Desc,Price,Pic) =>{
let db = getDatabase();
let workReference = ref(db,"MyWorks/"+Math.floor(Math.random()*100));
set (workReference,{
  TITLE:Title,
  DESCRIPTION:Desc,
  PRICE:Price,
  PICTURE:Pic,
});
  };

const SubmitWork = (e) => {
  e.preventDefault();
  Addnewworktodb(Title,Description,Price,Picture);
  document.getElementById("add-new-work").reset();
  window.alert("product added in DB");
}

  return (
      <section className='login'>
      <form id='add-new-work' >
      <div className='loginContainer'>
        <h3 className='Title'>Add New Work</h3>

        <label>Title</label>
        <input onChange={(e)=>setTitle(e.target.value)} type='text' autoFocus required/>
        
        <label>Description</label>
        <input onChange={(e)=>setDescription(e.target.value)} type='text'  required/>
        <label>Price</label>
        <input onChange={(e)=>setPrice(e.target.value)} type='text'  required/>
        <label>Picture</label>
        <input onChange={(e)=>setPicture(e.target.value)} type='url'  required/>

        <div className='btnContainer mt-5'> 
         <>
         <button type='submit' onClick={SubmitWork}>Submit</button>
         </> 
        </div>
      </div>
      </form>
    </section>
    
  )
}
