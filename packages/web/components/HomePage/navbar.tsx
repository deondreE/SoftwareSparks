import Image from "next/image" 

import logo from '../../public/logo.svg';

function NavBar () {    
    return (
        <div className='flex justify-center align-top'>
            <div className='float-left relative left-8 first-line:top-1 p-2'>
                <Image className='' src={logo} alt='dev' width={165} height={40} />
            </div>
            <div className='flex relative top-1 left-32 p-2 w-auto h-auto align-top'>
                <div className=''>
                    <p>Home</p>
                </div>
                <div className='ml-4'>
                    <p>Code</p>
                </div>
                <div className='ml-4'>
                    <p>About</p>
                </div>
                <div className='ml-4'>
                    <button className='hover:underline'><i><b>Roadmap</b></i></button>
                </div>
                <div className='ml-96'>
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;