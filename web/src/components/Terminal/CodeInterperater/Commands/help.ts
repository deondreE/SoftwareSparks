
import commands from './commands.json';

export default function help():string {
    let output = '';
    for (let command in commands) {
        // get description of command
        let description = commands[command].description;
        let usage = commands[command].usage;
        output += `name: ${command} \n description: ${description} \n usage: ${usage} \n ___________ \n`;
    }

    return output;
}