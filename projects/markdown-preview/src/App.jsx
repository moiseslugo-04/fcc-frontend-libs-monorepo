import TextEditor from './components/TextEditor'
// import Preview from './components/Preview'

import './App.css'
import { useMarkdown } from './hooks/userMarkdown'
import Preview from './components/Preview'
function App() {
  const { markdown, handleChange, previewRef } = useMarkdown()
  return (
    <div className='app d-flex p-3 pt-5 gap-3 flex-column bg-info-subtle min-vh-100'>
      <h1 className='text-center '>Welcome to my React Markdown Previewer</h1>
      <TextEditor
        className={'d-none'}
        onChange={handleChange}
        markdown={markdown}
      />
      <Preview markdown={markdown} previewRef={previewRef} />
    </div>
  )
}

export default App
