import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Lazy() {
const [Cards,setCards]= useState(null);
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
    <div className='container d-flex justify-content-between flex-warp'>
        {
            Cards && Cards.map((item,index)=>(
                <div className="card myProduct" style={{width: '18rem'}}>
  <img src={item[1].PICTURE} className="card-img-top" alt="FAILED TO LOAD IMAGE.." />
  <div className="card-body">
    <h5 className="card-title">{item[1].TITLE}</h5>
    <p className="card-text">{item[1].DESCRIPTION}</p>
    <div className='d-flex justify-content-between '>
    <strong>{item[1].PRICE}<span className='text-success'>DT</span></strong>
    {/* <Link to={{pathname : '/Card',state : {element : item } }} className="btn btn-success">Order Now</Link> last react linking method */}
    <Link 
    to="/Card"
     state={{product: item}}
     className='btn btn-success'
     >
        Buy now
     </Link>
    </div>
  </div>
</div>

            ))
            }

    </div>
  )
}

export default Lazy