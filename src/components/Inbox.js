import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


function Inbox() {
  const[comments,setComments] = useState(null)
  const db=getDatabase();

  const deleteComment = (id)=>{
    Swal.fire({
      title: 'Are you sure you ?',
      text : 'You will not be able to retrive this object',
      icon : 'warning',
      confirmButtonText: 'Yes, Delete it..',
      cancelButtonText : 'No, Keep it..'
    })
    .then((result)=>{
      if(result.isConfirmed){
        let commentref = ref(db,'Inbox/'+id);
        remove(commentref);
        getComments();
        Swal.fire(
          'Deleted !',
          'Your comment has been deleted',
          'success'
        )
      }
      else{
        Swal.fire(
        'Cancelled !',
        'Your Comment is safe :)',
        'success'
        )
      }
      }
    )
  }

  function getComments() {
    let DataRef = ref(db,"Inbox");
    if(DataRef == null || DataRef == undefined) return setComments(null)
    // Generate errors

  const starCountRef = ref(db, 'Inbox/' );
  onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  let works = data;
  if (works === null) return null ;
   let CleanData = Object.entries(works);
   return setComments(CleanData);
});
  
  }

useEffect(()=>{
getComments()
},[])

  return (
    <div className='mt-5 container'>
     {comments==null ?<p>empty</p>: <section className='row'>
        {comments && comments.map((item,id)=>(
        <div key={id} className="inbox-card card mx-1 my-2 col-md-12 col-lg-4 col-sm-12 " 
        style={{width:"18rem"}}>
          <div style={{textAlign : "end", cursor :"pointer" }} 
          onClick={()=>deleteComment(item[0])}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>

          </div>
        <div className="card-body">
          <h5 className="card-title">
            N <sup>:</sup>{id}</h5>
            <h5 className="card-title">
              {item[1].Name} {item[1].lastName}
            </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            <span className='text-info'>Comment:</span>
            {item[1].comment}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            <span className='text-info'>Addresse:</span>
            {item[1].addresse}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            <span className='text-info'>City:</span>
            {item[1].city}
          </h6>
          <p className="card-text"><span className='text-info'>Phone:</span> 
          {item[1].phone}</p>
        </div>
      </div>
        ))}
      </section>}
    </div>
  );
}

export default Inbox