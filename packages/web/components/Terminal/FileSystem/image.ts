import js from '../../../public/javascript.svg';
import py from '../../../public/python.svg';
import go from '../../../public/go.svg';
import rs from '../../../public/rust.svg'; 
import ts from '../../../public/typescript.svg';
import cpp from '../../../public/cpp.svg';

function returnImage(extension: string):any {
    switch (extension) {
        case 'ts':
            return ts;
        case 'js':
            return js;
        case 'cjs':
            return js;
        case 'py':
            return py;
        case 'go':
            return go;
        case 'rs':
            return rs;
        case 'cpp':
            return cpp;
        default:
            return;
    }
}

export default returnImage;