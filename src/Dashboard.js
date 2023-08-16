import React, { useState } from 'react'
import AddWork from './components/AddWork';
import Orders from './components/Orders';
import Files from './components/Files';
import Inbox from './components/Inbox';
import { Link } from 'react-router-dom';


export default function Dashboard(props) {
  const {handleLogout} = props;
  const [comp,setComp] = useState(<AddWork/>);

  return (
   <section className='dashboard'>
    <nav>
      <Link to="/">Home</Link>
      <button onClick={()=>setComp(<AddWork/>)}>Add Work</button>
      <button onClick={()=>setComp(<Inbox/>)}>Inbox</button>
      <button onClick={()=>setComp(<Orders/>)}>Orders</button>
      <button onClick={()=>setComp(<Files/>)}>Files</button>
      <button onClick={handleLogout}>logout</button>
    </nav>

   </section>
  )
}
