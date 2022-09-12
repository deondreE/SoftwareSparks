import React from 'react';
import Editor1 from '../components/Editor/Editor';
import Terminal from '../components/Terminal/Terminal';

function CodeEditor() {
  return (
    <>
      <div className="w-full h-full text-black">
        <h1 className="text-4xl text-center m-6 text-red-400">Code Editor</h1>
        <Editor1 />
      </div>
      <div className="w-full h-full">
        <Terminal prompt="$" defaultValue="Type in help for availible commands" />
      </div>
    </>
  );
}

export default CodeEditor;
