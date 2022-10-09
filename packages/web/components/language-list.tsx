import * as FaIcons from 'react-icons/fa'

function LanguageList () {
    return (
        <ul className='flex flex-col justify-center font-mono relative left-0 right-0 top-0 bottom-0'>
            <li className='flex flex-row justify-center'>
                <div className='flex justify-center'>
                    <FaIcons.FaPython className='text-6xl text-yellow-300' />
                    <p className='text-white text-2xl p-4'>Python</p>
                </div>
            </li>
            <li className='flex flex-row justify-center'>
                <div className='flex justify-center mt-4'>
                    <FaIcons.FaJava className='text-6xl mr-1.5 text-red-600' />
                    <p className='text-white text-2xl p-4'>Java</p>
                </div>
            </li>
            <li className='flex flex-row justify-center'>
                <div className='flex justify-center mt-4'>
                    <FaIcons.FaJs className='text-6xl mr-1.5 text-blue-400' />
                    <p className='text-white text-2xl p-4'>Javascript</p>
                </div>
            </li>
        </ul>
    )
}

export default LanguageList;