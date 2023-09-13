import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const goDetailpage = () =>{
    navigate('./ProductDetailPage');
  }
  return (
    <>
      <div>HomePage</div>
      <Link to='/AboutPage' style={{textDecoration: 'underline'}}>GoAbout</Link>
      <button onClick={goDetailpage}>goDetailPage</button>
    </>
  )
}

export default HomePage