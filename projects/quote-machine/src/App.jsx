import './App.css'
import { Facebook, Twitter } from 'lucide-react'
import { useQuote } from './hook/useQuote'
function App() {
  const { quote, getRandomQuote } = useQuote()
  const twitterUrl = `https://x.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote?.text}`
  return (
    <main className='container-sm min-vh-100  d-flex flex-column justify-content-center align-items-center'>
      {quote ? (
        <div
          id='quote-box'
          className='card-quote rounded-3 p-4 mw-50 container-sm bg-success d-flex flex-column justify-content-center align-items-center'
        >
          <blockquote className='position-relative blockquote fw-bolder fw-italic'>
            <span className='text-lg'>&#34;</span>{' '}
            <p id='text' className='d-inline'>
              {quote?.text}
            </p>
            <p className='flex text-end pt-3 fw-normal fw-italic' id='author'>
              -{quote?.author}
            </p>
          </blockquote>
          <div className='w-100 d-flex justify-content-between '>
            <div className='d-flex align-items-center gap-3'>
              <a href='https://www.facebook.com/?locale=pt_BR ' target='_blank'>
                <Facebook size='16' className='p-1 icons' />
              </a>
              <a id='tweet-quote' href={twitterUrl} target='_blank'>
                <Twitter size='16' className='p-1 icons' />
              </a>
            </div>
            <button
              onClick={getRandomQuote}
              id='new-quote'
              className='btn btn-primary'
            >
              New quote
            </button>
          </div>
        </div>
      ) : (
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ height: '200px' }}
        >
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}

      <p>By Moises Lugo</p>
    </main>
  )
}

export default App
