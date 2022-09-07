import React from 'react';
import { useState } from 'react';
import LoginForm from '../components/pages/HomePage/loginform';

import '../lib/sass/pages/HomePage.scss';

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const login = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 15000);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
    setOpen(false);
  };

  return (
    <div>
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
    </div>
  );
}
