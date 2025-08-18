import './App.css'
import ControlButton from './components/ControlButton.js'
import { TimerControl } from './components/TimerControl.js'
import TimerDisplay from './components/TimerDisplay.js'
import { useClock } from './hooks/useClock.js'
function App() {
  const {
    isActive,
    audioRef,
    timerLabel,
    timeLeft,
    timer,
    formatTime,
    handleStartStop,
    handleReset,
    handleDecrement,
    handleIncrement,
  } = useClock()

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div
        className={`bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transition-all duration-500 ${
          isActive ? 'ring-4 ring-indigo-200' : ''
        }`}
      >
        <h1 className='text-3xl font-bold text-center text-indigo-700 mb-6 animate-pulse'>
          25 + 5 Clock
        </h1>

        <div className='flex justify-between mb-8 gap-4'>
          <TimerControl
            OnDecrement={handleDecrement}
            OnIncrement={handleIncrement}
            label='Break Length'
            timer={timer.breakLength}
          />

          <TimerControl
            OnDecrement={handleDecrement}
            OnIncrement={handleIncrement}
            label='Session Length'
            timer={timer.sessionLength}
          />
        </div>

        <TimerDisplay
          timerLabel={timerLabel}
          timeLeft={timeLeft}
          
          isRunning={timer.isRunning}
        />

        <div className='flex justify-center space-x-4'>
          <ControlButton
            isRunning={timer.isRunning}
            handleStartStop={handleStartStop}
          />
          <button
            id='reset'
            onClick={handleReset}
            className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
            Reset
          </button>
        </div>

        <audio
          id='beep'
          ref={audioRef}
          src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
          className='hidden'
        />
      </div>
    </div>
  )
}

export default App
