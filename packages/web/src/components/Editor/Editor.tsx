import React from 'react';
import Editor from '@monaco-editor/react';
import '../../lib/sass/Editor.scss';

export default function Editor1() {
  const editorRef = React.useRef();

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    // alert(editorRef.current.getValue());
    const span = document.getElementById('code');
    span.innerHTML = editorRef.current.getValue();
  }

  function runCodeClick() {
    console.log('run code');
  }

  return (
    <div>
      <button onClick={runCodeClick} className="bg-slate-600 w-full h-full p-4 text-white border-slate-500 rounded-lg hover:bg-slate-400 text-3xl">
        Run Code
      </button>
      <Editor
        height="40vh"
        defaultLanguage="typescript"
        defaultValue="// Some Comment"
        onChange={showValue}
        onMount={handleEditorDidMount}
      />
      <pre id="code"></pre>
    </div>
  );
}
