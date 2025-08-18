import { ControlsProps } from '@/types'
import { ToggleSwitch } from './ToggleSwitch'
export function Controls({
  power,
  volume,
  onPowerToggle,
  onVolumeChange,
}: ControlsProps) {
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10)
    onVolumeChange(newVolume)
  }
  return (
    <div>
      <ToggleSwitch label={'Power'} handleToggle={onPowerToggle} isOn={power} />
      <label>
        Volume
        <input
          type='range'
          id='volume-slider'
          min='0'
          max='100'
          value={volume}
          onChange={handleVolumeChange}
          disabled={power}
        />
        <span>{volume}%</span>
      </label>
    </div>
  )
}
