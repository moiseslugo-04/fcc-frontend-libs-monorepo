import { useState } from 'react'
import { UseDrumMachineReturn, DrumMachineState, Pad } from '@/types'
export function useDrumMachine(): UseDrumMachineReturn {
  const [state, setState] = useState<DrumMachineState>({
    power: false,
    currentSound: '',
    volume: 50,
    currentPad: null,
  })

  const handlePowerToggle = () => {
    setState((prev) => ({
      ...prev,
      power: !prev.power,
      currentSound: !prev.power ? 'Drum Machine OFF' : '',
    }))
  }

  const handleVolumeChange = (volume: number) => {
    setState((prev) => ({
      ...prev,
      volume,
      currentSound: `Volume ${volume}`,
    }))

    // clean the message after 1seg
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        currentSound: prev.currentPad?.name ?? 'Drum Machine',
      }))
    }, 2000)
  }

  const handlePadTrigger = (soundName: string, newPad: Pad) => {
    if (state.power) return
    setState((prev) => ({
      ...prev,
      currentSound: soundName,
      currentPad: newPad,
    }))
  }
  const handleCurrentPad = (pad: Pad) => {
    setState((prev) => ({ ...prev, currentPad: pad }))
  }

  return {
    actions: {
      handlePowerToggle,
      handleVolumeChange,
      handlePadTrigger,
      handleCurrentPad,
    },
    state: {
      power: state.power,
      currentSound: state.currentSound,
      volume: state.volume,
      currentPad: state.currentPad,
    },
  }
}
