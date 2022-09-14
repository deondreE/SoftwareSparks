import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import CodeEditor from './components/CodeEditor/CodeEditor'

function App() {
  return (
      <Routes>
        <Route path="/" element={<CodeEditor />} />
      </Routes>
  )
}

export default App
