
import { useState } from 'react';
import CodeInterperator from './CodeInterperater/CodeInterperater';

function Terminal (props) {
    const [value, setValue] = useState('');

    const cI = new CodeInterperator();

    const handleChange = (e) => {
        // if the enter key is pressed, execute the code
        if (e.key === 'Enter') {
            const terminalOut = document.getElementById('terminal-out');
            terminalOut.innerHTML = cI.execute(value);
        }
    }

    return (
        <>
            <input 
                type="text"
                className="terminal-input w-full bg-slate-400"
                defaultValue={props.carret}
                style={{
                    color: '#000000'
                }}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleChange}
            />
            <pre id="terminal-out" className="w-full h-auto bg-slate-400 p-12 align-left">
                {/* {value} */}
            </pre>
        </>
    )
}

export default Terminal;