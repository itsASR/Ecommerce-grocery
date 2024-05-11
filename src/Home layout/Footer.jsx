import React from 'react'
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars,faBagShopping,faHouse,faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <>
      <div className="footer bg-white w-screen h-20 fixed bottom-0 shadow-black shadow md:hidden">
        <div className="container flex justify-between px-5 items-center h-full [&>*]:h-6">
          {/* <FontAwesomeIcon icon={faBars} /> */}
          {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
          {/* <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link> */}
          {/* <Link to='/cart'><FontAwesomeIcon icon={faBagShopping}/></Link> */}
          {/* <Link to="/login"><FontAwesomeIcon icon={faUser}/></Link> */}
        </div>
      </div>
    </>
  )
}

export default Footer