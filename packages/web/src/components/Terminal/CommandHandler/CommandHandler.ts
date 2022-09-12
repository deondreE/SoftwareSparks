import CommandFile from './commands.json';

class CommandHandler {
  helpCommand() {
    let result = '';
    for (const key in CommandFile.help) {
      result += `Command: ${CommandFile.help[key].command}\n Description: ${CommandFile.help[key].description}\n------------------------------\n`;
    }

    return result;
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
      case 'ls':
        return 'ls';
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
