
import Image from 'next/image'
import { useState, useRef } from 'react'

import plus from '../../public/plus.svg';

import returnImage from '../Terminal/FileSystem/image';

import {fileSys} from '../Terminal/FileSystem/fileSystem';

function Sidebar () {
    const [input, setInput] = useState(false);
    const [display, setDisplay] = useState('');

    const processInput = (e: any) => {
        if (e.key === 'Enter') {
            setInput(false);
            setDisplay('show');

            fileSys.push({ files: [e.target.value] });
        }
    }

    return (
        <div className="w-auto text-left">
            <div>
                <div className='flex'>
                    <button className="flex mb-2 bg-white" onClick={() => { 
                            setInput(!input)
                            setDisplay('hidden')
                        }}>
                            <Image className={`display: ${display}`} src={plus} alt="Javascript" width={20} height={20} />
                            {/* TODO: ADD TOOLTIP */}
                    </button>
                    {input && <input onKeyDown={(e: any) => {processInput(e)}} type="text" placeholder='filename' className="bg-slate-300 p-2 rounded-lg" />}
                </div>
                {fileSys.map((item: any, i: any) => {
                    return (
                        <div key={i}>
                            {item.files.map((file: any, index: any) => {
                                let extension = file.split('.')[1];
                                let image;
                                image = returnImage(extension);
                                // console.log(createFiles(fileSys));
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