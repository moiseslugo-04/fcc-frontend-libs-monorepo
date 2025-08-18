import { drumPads } from '@/data/drumPads'
import { DrumPad } from './components/DrumPad'
import { Display } from './components/Display'
import { Controls } from './components/Controls'
import { useDrumMachine } from './hooks/useDrumMachine'
import './App.css'
function App() {
  //handle state with clear structure
  const { actions, state } = useDrumMachine()
  const { handlePowerToggle, handlePadTrigger, handleVolumeChange } = actions
  const { volume, power, currentSound, currentPad } = state
  return (
    <div
      id='drum-machine'
      className='app bg-success-subtle p-3 d-flex flex-column justify-content-center align-items-center gap-2'
    >
      <div className='row row-cols-3 g-3'>
        {drumPads.map((pad) => {
          return (
            <DrumPad
              key={pad.keyTrigger}
              pad={pad}
              powerOn={power}
              volume={volume}
              onTrigger={handlePadTrigger}
            />
          )
        })}
      </div>
      <div className='controls '>
        <Display text={currentSound || 'Drum Machine'} />
        <Controls
          power={power}
          volume={volume}
          onPowerToggle={handlePowerToggle}
          onVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default App
