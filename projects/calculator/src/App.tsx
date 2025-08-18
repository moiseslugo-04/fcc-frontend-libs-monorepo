import { Button } from './components/Button.js'
import { Buttons } from './utils/constants.js'
import { useCalculator } from './hooks/useCalculator.js'
import './App.css'

function App() {
  const { displayValue, handleButtonClick } = useCalculator()
  return (
    <div className='w-screen h-screen bg-blue-900/90 flex flex-col items-center py-8 gap-20'>
      <h1 className=' text-4xl  font-bold text-green-500/90'>
        JavaScript Calculator
      </h1>
      <div className='w-min h-auto flex flex-col bg-black/90 rounded-md overflow-hidden '>
        {/**Display */}
        <div className='w-[300px] h-20 bg-green-900/70 text-white px-4 flex items-center justify-end'>
          <span className='font-mono text-xl' id='display'>
            {displayValue || '0'}
          </span>
        </div>

        {/**Buttons */}

        <div className='grid grid-cols-4 gap-2 p-2 place-items-center'>
          {Buttons.map(({ id, label, type }) => {
            return (
              <Button
                onClick={handleButtonClick}
                key={id}
                id={id}
                label={label}
                type={type}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
