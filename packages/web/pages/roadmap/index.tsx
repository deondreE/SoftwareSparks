
import Image from 'next/image';
import ProgressBar from '../../components/Roadmap/ProgressBar';
import folder from '../../public/folder.svg'; 

import '../../styles/Home.module.css';

function Index () {
    const testData = [
        { bgcolor: "#6a1b9a", completed: 10, name: "Design" },
        { bgcolor: "#00695c", completed: 20, name: "Development" },
        { bgcolor: "#ef6c00", completed: 10, name: "Testing" },
    ];

    return (
        <div >
            {/* Center using tailwind */}
            <div className=''>
                <div className='text-center mt-12'>
                    <Image src={folder} alt='folder' width={100} height={100} />
                    <h1 className='text-4xl text-center mb-2'>My Roadmap</h1>
                    <p className='font-light'>Here is a list of features we are working on, and the progress we have made so far.</p>
                </div>
            </div>
            {testData.map((item, idx) => {
                return (
                    <div key={idx} className='mt-10 block justify-center border w-96 p-4 relative right-0'>
                        <p className='text-3xl text-zinc-700 font-bold text-center'>{item.name}</p>
                        <div className='w-96 justify-center text-center'>
                            <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
                        </div>
                    </div>
                )
            })}

            <div>
                <p className='text-center text-2xl text-zinc-700 font-bold mt-10'>Want to see more?</p>
                <i className='text-center text-1xl'>In Development</i>
            </div>
        </div>
    )
}

export default Index;