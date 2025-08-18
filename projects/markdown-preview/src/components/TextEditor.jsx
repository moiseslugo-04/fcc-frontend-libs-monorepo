export default function TextEditor({ markdown, onChange }) {
  return (
    <div className='container mt-4'>
      <div className='card'>
        <div className='card-header bg-light'>
          <h5 className='mb-0'>Editor Markdown</h5>
        </div>
        <div className='card-body p-0'>
          <textarea
            id='editor'
            className='form-control border-0 p-3'
            value={markdown}
            onChange={onChange}
            style={{
              minHeight: '300px',
              fontFamily: 'monospace',
              fontSize: '16px',
            }}
            placeholder='white here...'
          ></textarea>
        </div>
        <div className='card-footer bg-light text-muted small'>
          Supports Markdown syntax: **bold**, *cursive*, `code`, etc.
        </div>
      </div>
    </div>
  )
}
