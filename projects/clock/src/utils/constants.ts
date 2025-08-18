import type { TimerState } from '@/types/index.js'

const INITIAL_STATE: TimerState = {
  breakLength: 5,
  sessionLength: 25,
  isRunning: false,
}

const HOUR = 60
const SESSION_LENGTH = 25 * HOUR
export { INITIAL_STATE, HOUR, SESSION_LENGTH }
