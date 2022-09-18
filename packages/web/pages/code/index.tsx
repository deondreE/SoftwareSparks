
import Dropdown from '../../components/Interface/dropdown';

import js from '../../public/javascript.svg';
import py from '../../public/python.svg';
import go from '../../public/go.svg';
import ts from '../../public/typescript.svg';
import rs from '../../public/rust.svg'; 
import cpp from '../../public/cpp.svg';
import { useState } from 'react';
import Editor from '../../components/CodeEditor/Editor';

function Page() {
    const [title, setTitle] = useState('Javascript');
    
    return (
        <div className='bg-blue-200'>
            <div className='w-full bg-blue-200 p-4 h-auto'>
                <Dropdown
                 setTitle={setTitle}
                 title={title}   
                 langOptions={
                    [
                        {name: 'Javascript', image: js},
                        {name: 'Python', image: py},
                        {name: 'Go', image: go},
                        {name: 'Rust', image: rs},
                        {name: 'Typescript', image: ts},
                        {name: 'C++', image: cpp},
                    ]} 
                />
                <div className="">
                    <Editor language={title} />
                </div>
            </div>
        </div>
    );
  }

export default Page;