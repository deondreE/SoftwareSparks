
import * as child from 'child_process';
import  fs  from 'fs';
import { stdout } from 'process';

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

async function runCode (programmingLang: string, firstRun: boolean) {
    // Run the code
    // Return the output
    // check the process current working directory
    const cwd = process.cwd();

    const dockerContainerPath = `./controllers/docker-containers/${programmingLang}`;
        try {
            await process.chdir(dockerContainerPath);
            await child.execSync(`docker build -t ${programmingLang} .`);
            await child.execSync(`docker run --name ${programmingLang} --log-driver json-file --log-opt max-size=10m -dp 4000:4000 ${programmingLang}`);
            const output = await child.exec(`docker logs --until=2s javascript`, {encoding: 'utf8'});

            output.stderr.on('data', (data) => {
                console.log(data.toString());
            }).on('end', () => {
                console.log('end');
            });



            setTimeout(async () => {
                child.execSync(`docker rm ${programmingLang}`);
                console.log('Container removed');
                await process.chdir(cwd);
            }, 2000);
        } catch (error ) {
            console.log(error);
        }
}

export { createCodeFile, runCode };