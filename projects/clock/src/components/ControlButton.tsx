import type { ControlButtonProps } from '@/types/index.js'
export default function ControlButton({
  isRunning,
  handleStartStop,
}: ControlButtonProps) {
  return (
    <button
      id='start_stop'
      onClick={handleStartStop}
      className={`px-6 py-3 rounded-lg font-medium transition-all ${
        isRunning
          ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
          : 'bg-green-500 hover:bg-green-600 text-white'
      } transform hover:scale-105 active:scale-95 shadow-md`}
    >
      {isRunning ? (
        <span className='flex items-center'>
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
              d='M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Pause
        </span>
      ) : (
        <span className='flex items-center'>
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
              d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Start
        </span>
      )}
    </button>
  )
}
