import React from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import '../../lib/sass/Editor.scss';
import Sidebar from './layout/Sidebar';

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

  async function runCodeClick() {
    console.log('run code');
    await axios.post('http://localhost:3000/code/', { code: editorRef.current.getValue() });
  }

  return (
    <div>
      <Sidebar />
      <button
        onClick={runCodeClick}
        className="bg-slate-600 w-full h-full p-4 text-white border-slate-500 rounded-lg hover:bg-slate-400 text-3xl">
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
