import React from 'react';
import { useState } from 'react';
import axios from 'axios';
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
  const [username, setUsername] = useState('');

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

  const getUsername = async () => {
    await axios.get('http://localhost:3000/auth/user/username').then((res: any) => {
      setUsername(res.username);
    });
  };

  return (
    <>
      <p className="text-red-600" onMouseEnter={getUsername}>
        User logged in is: {username}
      </p>
      <button
        className="relative right-0 float-right bg-red-300 h-24 w-32 p-2 hover:bg-red-500 text-white rounded-lg"
        onClick={login}>
        Sign up
      </button>
      <br />
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
