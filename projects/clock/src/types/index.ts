interface TimerControlProps {
  label: string
  timer: number
  OnIncrement: (label: string) => void
  OnDecrement: (label: string) => void
}
interface TimerDisplayProps {
  timerLabel: string
  timeLeft: number
  isRunning: boolean
}

interface ControlButtonProps {
  isRunning: boolean
  handleStartStop: () => void
}

interface TimerState {
  breakLength: number
  sessionLength: number
  isRunning: boolean
}
type TimerLabel = 'Session' | 'Break'
export type {
  TimerControlProps,
  TimerDisplayProps,
  ControlButtonProps,
  TimerState,
  TimerLabel,
}
