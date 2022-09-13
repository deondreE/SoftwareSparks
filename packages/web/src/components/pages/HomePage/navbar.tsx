import React from 'react';

import '../../../lib/sass/pages/Navbar.scss';
import Logo from '../../../assets/Logo.svg';

function Navbar({ additions }: { additions: React.ReactNode }) {
  return (
    <div className="navbar">
      <div>
        <img src={Logo} className="navbar-logo" />
      </div>
      <div className="flex justify-evenly">{additions}</div>
    </div>
  );
}

export default Navbar;
