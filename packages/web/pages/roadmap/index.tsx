
import Image from 'next/image';
import NavBar from '../../components/HomePage/navbar';
import ProgressBar from '../../components/Roadmap/ProgressBar';
import folder from '../../public/folder.svg'; 

function Index () {
    const testData = [
        { bgcolor: "#6a1b9a", completed: 10, name: "Design" },
        { bgcolor: "#00695c", completed: 20, name: "Development" },      
        { bgcolor: "#ef6c00", completed: 10, name: "Testing" },
    ];

    return (
        <div className='bg-blue-200'>
            {/* Center using tailwind */}
            {/* Center the position */}
            <div className=''>
                <NavBar />
                <div className='text-center mt-12'>
                    <Image src={folder} alt='folder' width={100} height={100} />
                    <h1 className='text-4xl text-center mb-2'>My Roadmap</h1>
                    <p className='font-light'>Here is a list of features we are working on, and the progress we have made so far.</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                {testData.map((item, idx) => {
                    return (
                        <div key={idx} className='position-center mt-10 block border rounded-xl w-96 p-4 bg-blue-300'>
                            <p className='text-3xl text-zinc-700 font-bold text-center justify-center'>{item.name}</p>
                            <div className='w-auto text-center justify-center'>
                                <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
                            </div>
                        </div>
                    )
                })}
            </div>
                {/* Footer */}
                <div className='flex flex-col items-center mt-10'>
                    <p className='text-center text-zinc-700 font-light'>Made with ❤️ by <a href='https://github.com/deondreE' className='text-bold'>deondreE</a></p>
                </div>
        </div>
    )
}

export default Index;