import React from 'react'
import Navbar from './Navbar'
import { Offline, Online } from "react-detect-offline";
import { backg, carousel1,carousel2,carousel3 } from './resources';
import SubNav from './SubNav';
import Contact from './Contact';
import Footer from './Footer';
export default function Home() {
  return (
    <>
    {/* <Offline>
 Im offline
    </Offline>
    <Online> */}
    
    <Navbar/>
    <div id="carouselExample" className="carousel slide carousel-navbar">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='nav-menu'> 
<SubNav/>
</div>

<h3 className='description'>
Finding the art in neural networks. Our mission is to revolutionise the art world and to become the exclusive provider of art generated by artificial neural networks – paintings which are both unique and exclusive – whereas some try to replicate human behaviour – other take paths of their own. We just started and are looking for other ai artists to collaborate with. If you are one of them shoot us an email.
</h3>
{/* My products */}
<div className='what-art-container'> 
  <img src={backg} className='img-fluid' alt='what-offre-img' />
<div className='what-art'>
  <h2>What Offre I ?</h2>
  <p className='text-center'>
  As the technology progressed, the boundary that separates man and machine became thinner and thinner. Artistic paths and expressions that human artists can explore in a single lifetime are limited. There is a huge unexplored expectation in many paths that the human artist is not able to undergo. In that light we see the intelligent machine as a tool which can illuminate us and also a character of itself in many yet undisclosed ways. We believe AI art is the next big thing and we are happy that y
  </p>
</div>
<button className='btn btn-small btn-primary'>follow us on instagram</button>
</div>
<p className='text-center'>

</p>
<div className='container my-5'>
  <h3>Contact us</h3>
  <p>

  </p>
<Contact />
</div>
<Footer/>
    
    {/* </Online> */}
    </>
  )
}
