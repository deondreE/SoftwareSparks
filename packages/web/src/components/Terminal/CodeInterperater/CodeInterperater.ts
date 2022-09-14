
import help from "./Commands/help";

class CodeInterperator {
    parse(command: string): string {
        // replace $ with '' in command
        command = command.replace(/\$/g, '');
        return command;
    }

    execute(command: string): string {
        command = this.parse(command);
        switch (command) {
            case 'ls':
                return 'ls: not implemented';
            case 'pwd':
                return 'pwd: not implemented';
            case 'clear':
                return 'clear: not implemented';
            case 'help':
                return help();
            case 'exit':
                return 'exit: not implemented';
            default:
                return 'command not found';
        }
    }
}

export default CodeInterperator;