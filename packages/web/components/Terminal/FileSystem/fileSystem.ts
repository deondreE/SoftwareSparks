

const fileSys = [
    { 
        dirName: 'files',
        files:  ['j.js', 'p.py', 't.ts', 'r.rs', 'c.cpp'] 
    },
]

let currentdir = '';

// change directory 
const changeDir = (dirName: string) => {
    const dir = fileSys.find(dir => dir.dirName === dirName)
    if (dir) {
        currentdir = dirName;
        return 'Directory changed';
    }

    return 'No such directory';
}

// get current directory
const getCurrentDir = () => {
    return currentdir;
}

// delete directory
const deleteDir = (dirName: string) => {
    const dir = fileSys.find(dir => dir.dirName === dirName)
    if (dir) {
        const index = fileSys.indexOf(dir);
        fileSys.splice(index, 1);
        return 'Directory deleted';
    }

    console.log(fileSys);
}

// list directory files
const listDir = (dirName: string) => {
    const dir = fileSys.find(dir => dir.dirName === dirName)
    if (dir) {
        // remove commas and add new line
        return dir.files.join(' ') + '\n';
    }
}

// create directory 
const createDir = (dirName: string) => {
    // check if directory exists
    if (fileSys.find((dir) => dir.dirName === dirName)) {
        return `Directory ${dirName} already exists`
    }

    // create directory
    fileSys.push({ dirName, files: [] })
    console.log(fileSys);
}

// create file
const createFile = (dirName: string, fileName: string) => {
    // check if directory exists
    const dir = fileSys.find((dir: any) => dir.dirName === dirName)
    if (!dir) {
        return `Directory ${dirName} does not exist`
    }

    // check if file exists
    if (dir.files.find((file: string) => file === fileName)) {
        return `File ${fileName} already exists`
    }

    // create file
    dir.files.push(fileName)
}

// delete file
const deleteFile = (dirName: string, fileName: string) => {
    // check if directory exists
    const dir = fileSys.find((dir: any) => dir.dirName === dirName)
    if (!dir) {
        return `Directory ${dirName} does not exist`
    }

    // check if file exists
    const file = dir.files.find((file: string) => file === fileName)
    if (!file) {
        return `File ${fileName} does not exist`
    }

    // delete file
    dir.files = dir.files.filter((file: string) => file !== fileName)
}

const createRealFile = async (fileName: string) => {
    await fs.createFileSync(fileName);
}


export {
    fileSys, 
    createDir, 
    createFile, 
    deleteFile,
    changeDir,
    deleteDir,
    listDir,
    getCurrentDir,
    createRealFile
};