
import Image from 'next/image'
import { useState, useRef } from 'react'

import js from '../../public/javascript.svg';
import py from '../../public/python.svg';
import go from '../../public/go.svg';
import rs from '../../public/rust.svg'; 
import ts from '../../public/typescript.svg';

import plus from '../../public/plus.svg';

const dir = [{ files: [ 'index.js', 'test.rs', 'test.py', 'test.go' ] }]

function Sidebar () {
    const [input, setInput] = useState(false);

    const processInput = (e: any) => {
        if (e.key === 'Enter') {
            setInput(false);

            dir.push({ files: [e.target.value] });
        }
    }

    return (
        <div className="w-auto text-left">
            <div>
                <div className='flex'>
                    <button className="flex mb-2 bg-white" onClick={() => { setInput(!input) }}>
                        <Image src={plus} alt="Javascript" width={20} height={20} />
                        {/* TODO: ADD TOOLTIP */}
                    </button>
                </div>
                {input && <input onKeyDown={(e: any) => {processInput(e)}} type="text" placeholder='filename' className="bg-slate-300 p-2 rounded-lg" />}
                {dir.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.files.map((file, index) => {
                                let extension = file.split('.')[1];
                                let image;
                                switch (extension) {
                                    case 'ts':
                                        image = ts;
                                        break;
                                    case 'js':
                                        image = js;
                                        break;
                                    case 'cjs':
                                        image = js;
                                        break;
                                    case 'py':
                                        image = py;
                                        break;
                                    case 'go':
                                        image = go;
                                        break;
                                    case 'rs':
                                        image = rs;
                                        break;
                                    default:
                                        image = js;
                                        break;
                                }
                                return (
                                    <div key={index} className="text-1xl p-2 flex hover:bg-slate-200">
                                        <Image  src={image} width={24} height={12} alt='work' />
                                        <button className="hover:underline ml-3">{file}</button>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}   

export default Sidebar;