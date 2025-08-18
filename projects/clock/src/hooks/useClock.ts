import type { TimerLabel, TimerState } from '@/types/index.js'
import { useState, useEffect, useRef } from 'react'
import { INITIAL_STATE, HOUR, SESSION_LENGTH } from '../utils/constants.js'
export function useClock() {
  const [timer, setTimer] = useState<TimerState>(INITIAL_STATE)
  const [timeLeft, setTimeLeft] = useState(SESSION_LENGTH)
  const [timerLabel, setTimerLabel] = useState<TimerLabel>('Session')
  const [isActive, setIsActive] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const { isRunning } = timer
    let interval = null

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (isRunning && timeLeft === 0) {
      if (!audioRef.current) return
      audioRef.current.currentTime = 0
      audioRef.current.play()

      if (timerLabel === 'Session') {
        setTimerLabel('Break')
        setTimer((prev) => ({
          ...prev,
          breakLength: prev.breakLength * HOUR,
        }))
      } else {
        setTimerLabel('Session')
        setTimer((prev) => ({
          ...prev,
          sessionLength: prev.sessionLength * HOUR,
        }))
      }
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [timer, timeLeft, timerLabel])

  const handleReset = () => {
    setTimer(INITIAL_STATE)
    setTimeLeft(SESSION_LENGTH)
    setTimerLabel('Session')
    setIsActive(false)
    if (!audioRef.current) return
    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }

  const handleStartStop = () => {
    setTimer((prev) => ({ ...prev, isRunning: !prev.isRunning }))
    setIsActive(!isActive)
  }

  const handleDecrement = (label: string) => {
    const { isRunning, sessionLength, breakLength } = timer
    if (label === 'Break Length') {
      if (timer.breakLength > 1) {
        setTimer((prev) => ({ ...prev, breakLength: prev.breakLength - 1 }))
        if (timerLabel === 'Break' && !isRunning) {
          setTimeLeft((breakLength - 1) * HOUR)
        }
      }
    } else if (label === 'Session Length') {
      if (sessionLength > 1) {
        setTimer((prev) => ({ ...prev, sessionLength: prev.sessionLength - 1 }))
        if (timerLabel === 'Session' && !isRunning) {
          setTimeLeft((sessionLength - 1) * HOUR)
        }
      }
    }
  }
  const handleIncrement = (label: string) => {
    const { isRunning, sessionLength, breakLength } = timer
    console.log(label)

    if (label === 'Break Length') {
      if (timer.breakLength > 1) {
        setTimer((prev) => ({ ...prev, breakLength: prev.breakLength + 1 }))
        if (timerLabel === 'Break' && !isRunning) {
          setTimeLeft((breakLength + 1) * HOUR)
        }
      }
    } else if (label === 'Session') {
      if (sessionLength > 1) {
        setTimer((prev) => ({ ...prev, sessionLength: prev.sessionLength + 1 }))
        if (timerLabel === 'Session' && !isRunning) {
          setTimeLeft((sessionLength + 1) * HOUR)
        }
      }
    }
  }

  return {
    isActive,
    audioRef,
    timerLabel,
    timeLeft,
    handleStartStop,
    handleReset,
    handleDecrement,
    handleIncrement,
    timer,
  }
}
