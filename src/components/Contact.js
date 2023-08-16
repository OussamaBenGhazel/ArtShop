import React from 'react'

export default function Contact() {
  return (
    <div>
  <div>
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputName1" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName1" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputLastName2" className="form-label">LastName</label>
        <input type="text" className="form-control" id="inputLastName2" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhone3" className="form-label">Phone</label>
        <input type="text" className="form-control" id="inputPhone3" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
     
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputComments" className="form-label">Comments</label>
        <input type="text" className="form-control" id="inputComments" />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
  </div>
  
</div>
  )
}
