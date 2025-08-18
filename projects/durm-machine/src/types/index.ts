export interface Pad {
  keyTrigger: string
  name: string
  src: string
}

export interface DrumMachineState {
  power: boolean
  currentSound: string
  volume: number
  currentPad: Pad | null
}

export interface DrumMachineActions {
  handlePowerToggle: () => void
  handleVolumeChange: (volume: number) => void
  handlePadTrigger: (soundName: string, newPad: Pad) => void
  handleCurrentPad: (pad: Pad) => void
}

export interface UseDrumMachineReturn {
  state: DrumMachineState
  actions: DrumMachineActions
}

export interface ControlsProps {
  power: boolean
  volume: number
  onPowerToggle: () => void
  onVolumeChange: (volume: number) => void
}
export interface DrumPadProps {
  pad: Pad
  powerOn: boolean
  volume: number
  onTrigger: (name: string, newPad: Pad) => void
}

export interface ToggleSwitchProps {
  label: string
  isOn: boolean
  handleToggle: () => void
}
export type KeyTrigger = 'Q' | 'W' | 'E' | 'A' | 'S' | 'D' | 'Z' | 'X' | 'C'

export interface DrumPad {
  keyTrigger: KeyTrigger
  name: string
  src: string
}
