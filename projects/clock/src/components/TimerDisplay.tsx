import type { TimerDisplayProps } from '@/types/index.js'
import { formatTime } from '../utils/formatTime.js'
export default function TimerDisplay({
  timerLabel,
  timeLeft,
  isRunning,
}: TimerDisplayProps) {
  return (
    <div
      id='timer-display'
      className={`relative bg-indigo-100 rounded-full w-64 h-64 mx-auto mb-8 flex flex-col items-center justify-center transition-all duration-300 ${
        timeLeft <= 60 ? 'animate-pulse bg-red-100' : ''
      }`}
    >
      <h2 id='timer-label' className='text-xl font-semibold text-indigo-700'>
        {timerLabel}
      </h2>
      <div
        id='time-left'
        className={`text-5xl font-bold ${
          timeLeft <= 60 ? 'text-red-600' : 'text-indigo-800'
        }`}
      >
        {formatTime(timeLeft)}
      </div>
      {isRunning && (
        <div className='absolute inset-0 rounded-full border-4 border-indigo-300 animate-spin-slow opacity-30'></div>
      )}
    </div>
  )
}
