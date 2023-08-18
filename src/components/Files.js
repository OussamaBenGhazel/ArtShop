import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'

export default function Files() {
  const [Cards,setCards] = useState(null);
  function getCards(){
    const db = getDatabase();
    const cardsRef = ref(db,"MyWorks/");
    onValue(cardsRef,(snapshot)=>{
        const data=snapshot.val();
        if(data === null)return null;
        let cleanData = Object.entries(data);
        return setCards(cleanData);
    })
}
useEffect(()=>{
getCards();
},[])

  return (
    <div className='container mx-5'>
      <table class="table table-striped table-light">
        <thread className='bg-info text-light'>
         <th><p className='bg-info'>N<sup className='bg-info'>o</sup></p></th>
         <th>Title</th>
         <th>Description</th>
         <th>Price</th>
         <th>Picture</th>
         <th>Delete</th>
         <th>Edit</th>
        </thread>
        <tbody>
        {Cards && Cards.map((item,index)=>(
          <>
          <tr className='bg-light text-light'>
            <td>{index}</td>
            <td>{item[1].TITLE}</td>
            <td>{item[1].DESCRIPTION}</td>
            <td>{item[1].PRICE}</td>
            <td><a target='_blank' className='text-info' href={item[1].PICTURE}>{item[1].PICTURE.slice(0,20)}</a>
            <br></br>
            <img src={item[1].TITLE} width={"100px"}/></td>
            <td><button className='btn btn-danger'>X</button></td>
            <td><button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" >edit</button></td>
          </tr>
        

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
       <div className="row">
       <form className='col-6'>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Title : </label>
            <input type="text" className="form-control" placeholder={item[1].TITLE} id="recipient-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Description :</label>
            <textarea className="form-control"  placeholder={item[1].DESCRIPTION}  id="message-teasxt" defaultValue={""} />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Price :</label>
            <input type="number"  placeholder={item[1].PRICE}  className="form-control" id="reciapient-name" />
          </div>
        
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Picture url :</label>
            <input type="text"  placeholder={item[1].PICTURE}  className="form-control" id="reciapient-naddzme" />
          </div>
        </form>
        <div className='col-6'>
          <img src={item[1].PICTURE} className='img-fluid' />
        </div>
       </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">UPDATE</button>
      </div>
    </div>
  </div>
</div>
</>
  ))}
</tbody>
</table>
</div>
  )}