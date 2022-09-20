import Image from "next/image" 

import logo from '../../public/logo.svg';

function NavBar () {    
    return (
        <div className='flex justify-center align-top'>
            <div className='float-left relative left-8 first-line:top-1 p-2 bg-transparent'>
                <Image className='' src={logo} alt='dev' width={165} height={40} />
            </div>
            <div className='flex relative top-1 left-32 p-2 w-auto h-auto align-top'>
                <div className=''>
                    <a href='/' className='hover:underline'>Home</a>
                </div>
                <div className='ml-4'>
                    <a href='/code' className='hover:underline'>Code</a>
                </div>
                <div className='ml-4'>
                    <a href='/about' className='hover:underline'>About</a>
                </div>
                <div className='ml-4'>
                    <a href='/roadmap' className='hover:underline'><i><b>Roadmap</b></i></a>
                </div>
                <div className='ml-96'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;