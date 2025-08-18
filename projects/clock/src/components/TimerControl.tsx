import type { TimerControlProps } from '@/types/index.js'
export function TimerControl({
  label,
  timer,
  OnIncrement,
  OnDecrement,
}: TimerControlProps) {
  const handleDecrement = () => OnDecrement(label)
  const handleIncrement = () => OnIncrement(label)

  return (
    <div id='break-container' className='bg-indigo-50 p-4 rounded-xl flex-1'>
      <h2
        id='break-label'
        className='text-center font-semibold text-indigo-600 mb-2'
      >
        {label}
      </h2>
      <div className='flex items-center justify-center space-x-4'>
        <button
          id='break-decrement'
          onClick={handleDecrement}
          className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 active:scale-95'
        >
          -
        </button>
        <span id='break-length' className='text-2xl font-bold text-indigo-800'>
          {timer}
        </span>
        <button
          id='break-increment'
          onClick={handleIncrement}
          className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 active:scale-95'
        >
          +
        </button>
      </div>
    </div>
  )
}
