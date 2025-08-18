import { marked } from 'marked'

export default function Preview({ markdown, previewRef }) {
  return (
    <div className='container mt-4'>
      <div className='card'>
        <div className='card-header bg-light'>
          <h5 className='mb-0'>Preview</h5>
        </div>
        <div
          className='card-body p-4 preview-content'
          style={{ minHeight: '300px' }}
        >
          <div
            ref={previewRef}
            id='preview'
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  )
}
