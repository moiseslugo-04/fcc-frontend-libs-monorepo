import { ToggleSwitchProps } from '@/types'

export function ToggleSwitch({ label, isOn, handleToggle }: ToggleSwitchProps) {
  return (
    <div className='d-flex justify-content-center  align-items-center flex-column'>
      <h5>{label}</h5>
      <button
        className='btn-toggle d-flex position-relative'
        onClick={handleToggle}
      >
        <div
          className={`switch position-absolute ${
            isOn ? 'start-0  bg-primary' : 'end-0 bg-success '
          }`}
        ></div>
      </button>
    </div>
  )
}
