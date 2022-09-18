import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

// Langs
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import Terminal from '../Terminal/Terminal';
import Sidebar from '../Interface/sidebar';

interface props {
    language: string;
}

function Editor({ language }: props) {
    const [value, setValue] = useState('');
    const [open, isOpen] = useState(true );

    const setExtenstions = (language: string) => {
      switch (language) {
          case 'Javascript':  
              return javascript();
          case 'Python':
              return python();
          case 'Rust':
              return rust();
          case 'C++':
              return cpp();
          default:
              return javascript();
        }
    };

    const setTemplate = (language: string) => { 
        switch (language) {
            case 'Javascript':
                return `console.log('Hello World!');`;
            case 'Typescript':
                return `console.log('Hello World!');`;
            case 'Python':
                return `print('Hello World!')`;
            case 'Rust':
                return `fn main() { \n println!("Hello World!");\n }`;
            case 'Go':
                return `package main\n\nimport "fmt"\n\nfunc main() { \n fmt.Println("Hello World!")\n }`;
            case 'C++':
                return `#include <iostream>\n\nint main() {\n std::cout << "Hello World!";\n return 0;\n }`;
            default:
                return `console.log('Hello World!');`;
        }
    };

    const height = '400px';
    
    return (
      <>
        
        <CodeMirror 
          value={setTemplate(language)}
          height={height}
          theme={okaidia}
          extensions={[setExtenstions(language)]}
          onLoad={(e: any) => {
            setValue(e);
          }}
          onChange={(e: any) => {
            setValue(e);
          }}
        >
        <button 
          onClick={() => {
            console.log(value);
          }}
          className="bg-slate-500 p-4 mb-24 border-slate-600 rounded-lg float-right"
        >
          Run Code
        </button>
        <div 
          className="bg-slate-300 p-6 border rounded-lg float-left z-10"
        >
          {/* // arrow image */}
          {open && <Sidebar />}
        </div>
        </CodeMirror>
        <Terminal prompt='$' username='deondreenglish' />
      </>
    );
} 

export default Editor;