import { DrumPadProps } from '@/types'
import { useCallback, useEffect, useRef } from 'react'

export function DrumPad({ pad, powerOn, volume, onTrigger }: DrumPadProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const padRef = useRef<HTMLButtonElement>(null)

  // effect to handle volume

  const playAudio = useCallback(() => {
    try {
      const audio = audioRef.current
      if (!audio) return
      audio.currentTime = 0
      audio.volume = volume / 100
      audio.play().catch((e) => console.log('Error playing the audio'))
    } catch (error) {
      console.error('Audio Error', error)
    }
  }, [volume])

  const triggerPad = () => {
    if (powerOn) return
    playAudio()
    onTrigger(pad.name, pad)
  }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLocaleUpperCase() === pad.keyTrigger) {
        triggerPad()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [pad.keyTrigger, powerOn, volume])
  return (
    <button
      ref={padRef}
      id={`pad-${pad.keyTrigger}`}
      className='drum-pad col text-center p-2   text-white rounded btn btn-outline-primary btn-lg'
      onClick={triggerPad}
      aria-label={`Play ${pad.name}`}
    >
      <audio
        ref={audioRef}
        id={pad.keyTrigger}
        className='clip'
        src={pad.src}
        preload='auto'
      ></audio>
      {pad.keyTrigger}
    </button>
  )
}
