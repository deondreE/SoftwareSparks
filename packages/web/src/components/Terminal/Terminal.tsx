import React, { useState } from 'react';
import CommandHandler from './CommandHandler/CommandHandler';

interface TerminalProps {
  prompt: string;
  defaultValue: string;
}

function Terminal(props: TerminalProps) {
  const [value, setValue] = useState('');

  const commandHandler = new CommandHandler();

  function parseCommands(command: string) {
    const commands = command.split(' ');
    const commandName = commands[0].replace('$', '');
    const commandArgs = commands.slice(1);
    return { commandName, commandArgs };
  }

  const handleEnter = (e: any) => {
    setValue(e.target.value);
    runCommand(
      parseCommands(value).commandName,
      commandHandler.checkCommand(parseCommands(value).commandName)
    );
  };

  async function runCommand(command: string, isCommand: boolean) {
    const input = document.getElementById('input');
    const d = document.getElementsByClassName('term-out');
    d[0].innerHTML = props.defaultValue;

    if (isCommand) {
      input.value = `${props.prompt}`;
      const result = await commandHandler.runCommand(command);
      d[0].innerHTML = result;
    }
  }

  return (
    <div className="mt-10 block w-full h-full border border-black bg-black resize-x">
      <input
        type="text"
        defaultValue={props.prompt}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleEnter(e);
        }}
        onChange={(e) => setValue(e.target.value)}
        id="input"
        className="w-full color-slate-300 bg-black border-none cursor-pointer"
      />
      <pre
        className="p-12 term-out text-2xl text-green-500 cursor-not-allowed max-w-xl"
        id="terminal-out">
        {props.defaultValue}
      </pre>
    </div>
  );
}

export default Terminal;
