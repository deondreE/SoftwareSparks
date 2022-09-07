/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface props {
  handleSubmit: any;
}

import '../../../lib/sass/pages/LoginForm.scss';

export default function LoginForm(props: props) {
  return (
    <div className="login-form">
      <div className="login-form__header">
        <h1 className="login-form__title">Login</h1>
        <p className="login-form__subtitle">Welcome back!</p>
      </div>
      <div className="login-form__body">
        <div className="login-form__input">
          <label className="login-form__label">Email</label>
          <input className="login-form__input-field" type="email" />
        </div>
        <div className="login-form__input">
          <label className="login-form__label">Password</label>
          <input className="login-form__input-field" type="password" />
        </div>
        <div className="login-form__input">
          <button className="login-form__button" type="button" onClick={props.handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
