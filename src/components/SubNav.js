import React from 'react'
import { Plogo } from './resources'

export default function SubNav() {
  return (
   <div>
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Shop</a>
    </li>
    <li className="nav-item mb-10">
      <img src={Plogo} className="navbar-brand" width="60" height="60" />
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Privacy Policy</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contact</a>
    </li>
  </ul>
</div>

  )
}
