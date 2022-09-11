import React from 'react';
import { useState } from 'react';
import LoginForm from '../components/pages/HomePage/loginform';

import '../lib/sass/pages/HomePage.scss';

import Navbar from '../components/pages/HomePage/navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar additions={<NavButton />} />
    </div>
  );
}

function NavButton() {
  const [open, setOpen] = useState(false);

  const login = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 15000);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
    setOpen(false);
  };

  return (
    <>
      <button className="text-3xl text-black bg-red-200 p-4 border border-red-300">
        Button
        <a href="#" />
      </button>
      <button className="login-button" onClick={login}>
        Sign up
      </button>
      <div>
        {open && (
          <>
            <LoginForm handleSubmit={handleSubmit} />
          </>
        )}

        {!open && <> </>}
      </div>
    </>
  );
}
