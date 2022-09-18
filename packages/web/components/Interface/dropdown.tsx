
import { useState } from 'react';
import Image from 'next/image';

import Editor from '../../components/CodeEditor/Editor';

interface props {
    langOptions: object[];
}

function Dropdown({ langOptions }: props) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('Javascript');
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div>
                <button onClick={toggle} type='button' className='inline-flex justify-center w-26 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' id='options-menu' aria-haspopup='true' aria-expanded='true'>
                    {title}
                    <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                        <path fillRule='evenodd' d='M5 7a1 1 0 011.707 0L10 10.586 13.293 7.293A1 1 0 1114.707 8.707l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 7z' clipRule='evenodd' />
                    </svg>
                </button>

                {isOpen && (
                        //  Dropdown items
                        // TODO: add animation to dropdown
                        <div className="bg-gray-50">
                            <div className='py-1'>
                                {langOptions.map((lang, index) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div key={index} className='flex p-2'>
                                        <Image src={lang.image} width={36} height={36} alt={lang.name} />
                                        <button onClick={() => { 
                                            console.log(lang.name)
                                            setTitle(lang.name);
                                            setIsOpen(!isOpen);
                                        }}
                                        type="button" 
                                        className='block px-4 w-26 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-300' role='menuitem'>
                                            {lang.name}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                )}
                <div className="w-full">
                    <Editor language={title} />
                </div>
            </div>
        </div>
    );
}

export default Dropdown;