import React from 'react';

import { Terminal } from 'xterm';

const TerminalFinal = () => {
  const term = new Terminal();
  const d = document.createElement('div');
  term.open(d.appendChild(document.createElement('div')));
  document.appendChild(d);
  term.write('Hello world\r\n');

  return <div></div>;
};

export default TerminalFinal;
