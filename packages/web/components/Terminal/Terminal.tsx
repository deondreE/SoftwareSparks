
function Terminal ({prompt, username}: {prompt: string, username: string}) {
    const runCommand = (command: string) => {
        let d: any = document.getElementById('term');
        let i: any = document.getElementById('input');
        d.innerHTML = ``;
        // let c = command.replace(prompt, '');

        const [c, args] = command.split(' ');
        let promptFinal = `${username}:${prompt}`;
        let userDir = `${username}/~`;
    
        switch (c.replaceAll(prompt, '')) {
            case 'help':
                d.innerHTML += `<p class="p-2 bg-white text-black">Available Commands: <br /> help <br /> clear <br /> echo <br /> ls <br /> cd <br /> cat <br /> mkdir <br /> rm <br /> rmdir <br /> touch <br /> mv <br /> cp <br /> pwd <br /> whoami <br /> date <br /> time <br /> exit</p>`;
                i.value = `${prompt}`;
                break;
            case 'clear':
                d.innerHTML = ``;
                i.value = `${prompt}`;
                break;
            case 'echo':
                d.innerHTML += `<p class="p-2 bg-white text-black">${args}</p>`;
                i.value = `${prompt}`;
                break;
            case 'ls':
                d.innerHTML += `NOT IMPLEMENTED`;
                i.value = `${prompt}`;
                break;
            case 'pwd':
                d.innerHTML += `<p class="p-2 bg-white text-blue-500">${userDir}</p>`;
                i.value = `${prompt}`;
                break;
            default:   
                d.innerHTML += `<p class="p-4 bg-red-600 text-black">Command not found: ${command}</p>`;
                i.value = `${prompt}`;
                break;
        }
    }   

    return (
        <>
            <div className="block mt-2">
                <input 
                    className='w-full p-2 border-white rounded-xs'
                    type={'text'}
                    placeholder={'Enter your command'}
                    defaultValue={`${prompt}`}
                    id="input"
                    onKeyDown={(e:any) => {
                        if (e.key === 'Enter') {
                            runCommand(e.target.value);
                        }
                    }}
                />
                <div className='w-full h-full'>
                    <code id="term" className="bg-white text-2xl"></code>
                </div>
            </div>   
        </>
    );
}

export default Terminal;