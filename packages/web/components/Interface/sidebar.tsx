
import Image from 'next/image'
import { useState } from 'react'

import plus from '../../public/plus.svg';
import folder from '../../public/folder.svg';

import returnImage from '../Terminal/FileSystem/image';

import {fileSys, createFile, createDir} from '../Terminal/FileSystem/fileSystem';

function Sidebar () {
    const [input, setInput] = useState(false);
    const [dir, setDir] = useState(false);

    const processInput = (e: any) => {
        if (e.key === 'Enter') {
            setInput(false);

            let value = e.target.value;

            createFile('files', value);
        }
    }

    const processDirInput = (e: any) => {
        if (e.key === 'Enter') {
            setDir(false);

            let value = e.target.value;

            createDir(value);
            console.log(fileSys);
        }
    }

    return (
        <div className="w-auto text-left">
            <div>
                <div className='flex'>
                    <button className="flex mb-2\" onClick={() => { 
                            setInput(!input)
                        }}>
                            <Image className={`${input ? 'hidden' : 'block'}`} src={plus} alt="Javascript" width={20} height={20} />
                            {/* TODO: ADD TOOLTIP */}
                    </button>
                    <button
                        onClick={() => {
                            setDir(!dir)
                        }}
                        className={`ml-2 ${dir ? 'hidden' : 'block'}`}
                    >
                        <Image className={``} src={folder} alt="Javascript" width={20} height={20} />
                    </button>
                    {input && <input onKeyDown={(e: any) => {processInput(e)}} type="text" placeholder='filename' className="bg-slate-300 p-2 rounded-lg" />}
                    {dir && <input onKeyDown={(e: any) => {processDirInput(e)}} type="text" placeholder='dirName' className="bg-slate-300 p-2 rounded-lg" />}
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