
import Editor from '@monaco-editor/react';
import Terminal from '../Terminal/Terminal';

function CodeEditor ( ) {
    return (
        <>
            <Editor 
                height="40vh"
                language="javascript"
                theme="vs-dark"
                value={`// Language: javascript
                `}
                options={{
                    selectOnLineNumbers: true,
                }}
            />   
            <Terminal 
                carret="$"
            />
        </>
    )
}

export default CodeEditor;