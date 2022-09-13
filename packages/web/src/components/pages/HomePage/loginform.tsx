/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface props {
  handleSubmit: any;
}

import '../../../lib/sass/pages/LoginForm.scss';

export default function LoginForm(props: props) {
  return (
    <div className="w-auto h-64 bg-slate-500 text-black">
      <form className="p-4 border-slate-700 rounded-lg">
        <label className="flex justify-between color-black text-2xl">
          Username:
          <input type="text" className="ml-2" />
        </label>
        <label className="flex justify-between color-black text-2xl mt-10 border-slate-700 rounded-lg">
          Password:
          <input type="password" className="" />
        </label>
        <button
          type="submit"
          onClick={props.handleSubmit}
          className="w-32 bg-slate-800 p-4 h-auto border borer-slate-700 rounded-xl mt-10 ml-36 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
