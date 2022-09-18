
import Dropdown from '../../components/Interface/dropdown';

import js from '../../public/javascript.svg';
import py from '../../public/python.svg';
import go from '../../public/go.svg';
import rs from '../../public/rust.svg'; 

function Page() {
    return (
        <div className=''>
            <div className='w-full bg-red-300 p-4 h-auto'>
                <Dropdown langOptions={
                    [
                        {name: 'Javascript', image: js},
                        {name: 'Python', image: py},
                        {name: 'Go', image: go},
                        {name: 'Rust', image: rs},
                    ]} 
                />
            </div>
        </div>
    );
  }

export default Page;