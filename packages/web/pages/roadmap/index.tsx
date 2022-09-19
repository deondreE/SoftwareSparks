
import Image from 'next/image';
import folder from '../../public/folder.svg'; 
import styled from 'styled-components';

import '../../styles/Home.module.css';

const Conatiner = styled.div`
    width: 50%;
    height: 50%;
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
    border-radius: 10px;
    positoon: relative;
    right: 100em;
`;

function Index () {
    return (
        <div >
            {/* Center using tailwind */}
            <div className=''>
                <Conatiner>
                    <Image src={folder} alt='folder' width={100} height={100} />
                </Conatiner>
                <div className='text-1xl text-center'>
                    <h1 className='text-3xl text-center'>My Roadmap</h1>
                    <p className='font-light'>Here is a list of features we are working on, and the progress we have made so far.</p>
                </div>
            </div>
        </div>
    )
}

export default Index;