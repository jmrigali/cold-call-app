import React from 'react';


const Navbar = ({ refresh }) => {
  return (
    <div className="navbar">
      Cold Call App for g68<br />
      <button className="refresh" onClick={() => refresh()}>Refresh</button>
    </div>
  )
}

export default Navbar;
