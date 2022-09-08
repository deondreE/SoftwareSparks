
import * as child from 'child_process';
import  fs  from 'fs';

async function createCodeFile(code: string, programmingLang: string) {
    // Create a file with the code
    // Return the file path

    const dockerContainerPath = `../controllers/docker-containers/${programmingLang}`;

    const filePath = `${dockerContainerPath}/temp${returnFileExention(programmingLang)}`;
    await fs.writeFile(filePath, code, () => {
        console.log('File created');
    });
    return filePath;
}

function returnFileExention(programmingLang: string) {
    // Return the file extension based on the programming language
    switch(programmingLang) {
        case 'python':
            return '.py';
        case 'javascript':
            return '.js';
        case 'java':
            return '.java';
        case 'c':
            return '.c';
        case 'c++':
            return '.cpp';
        default:
            return '.txt';
    }
}

function runCode (programmingLang: string) {
    // Run the code
    // Return the output

    process.chdir(`./controllers/docker-containers/${programmingLang}`);
    const output = child.execSync(`docker-compose up`);
    return output;
}

export { createCodeFile, runCode };