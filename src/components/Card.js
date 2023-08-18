import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Contact from './Contact';

export default function Card() {
  let useLoc = useLocation();
const {product} = useLoc.state;

  return (
    <>
    <Navbar/>
    <div className='container mt-5'>
    {!product && <div>Loading....</div>}
{product &&
    (<div>
      <div>
        <img src={product[1].PICTURE}/>
        <h1>{product[1].TITLE}</h1>
        <h4>{product[1].DESCRIPTION}</h4>
        <h1>
          <span className='text-success'>{product[1].PRICE}</span>DT
        </h1>
        <div className='d-grid gap-2'>
          <button className='btn btn-success' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="wodo">
        Place an order
          </button>
        </div>
      </div>
      <Link to="/"className='text-center'>
       return to home page
        </Link>
      </div>
    )}
    </div>
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Place an order for :<span className='text-primary'>{product[1].TITLE}</span> </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <Contact DBRef="/Orders" order={product[1]}/>
      </div>
    </div>
  </div>
</div>


</>)}
