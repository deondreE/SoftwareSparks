/* eslint-disable no-prototype-builtins */
import CommandFile from './commands.json';
import * as fs from 'fs-extra';
const share = './share';

class CommandHandler {
  helpCommand() {
    let result = '';
    for (const key in CommandFile.help) {
      result += `Command: ${CommandFile.help[key].command}\n Description: ${CommandFile.help[key].description}\n------------------------------\n`;
    }

    return result;
  }

  lsCommand(): any {
    fs.readdirSync(share).forEach((file) => {
      console.log(file);
    });
  }

  nodeCommand(command: string): string {
    return command;
  }

  checkCommand(command: string): boolean {
    console.log(CommandFile.hasOwnProperty(command));
    if (CommandFile.hasOwnProperty(command)) {
      return true;
    }

    return false;
  }

  runCommand(command: string): string {
    switch (command) {
      case 'help':
        return this.helpCommand();
      case 'clear':
        return '';
      case 'node':
        return this.nodeCommand(command);
      case 'ls':
        return this.lsCommand();
      case 'exit':
        return 'exit';
      default:
        return this.error();
    }
  }
  error(): string {
    return 'Command not found';
  }
}

export default CommandHandler;
