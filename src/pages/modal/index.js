import React, {useState} from 'react'

// Components
import Modal from 'components/modal'

const ModalExample = () => {
  const [isOpen, toggleModal] = useState(false)
  const [effect, setModalEffect] = useState('dialog')
  const [coverage, setModalCoverage] = useState(80)

  return (
    <React.Fragment>
      <button type="button" onClick={() => toggleModal(!isOpen)}>
        toggle modal
      </button>
      <input
        type="range"
        name="coverage"
        min="50"
        max="100"
        step="5"
        value={coverage}
        onChange={event => setModalCoverage(event.target.valueAsNumber)}
      />
      <select
        value={effect}
        onChange={event => setModalEffect(event.target.value)}
      >
        <option value="dialog">Dialog</option>
        <option value="slide-top">Slide From Top</option>
        <option value="slide-left">Slide From Left</option>
        <option value="slide-right">Slide From Right</option>
        <option value="slide-bottom">Slide From Bottom</option>
      </select>
      <Modal
        coverage={coverage}
        isOpen={isOpen}
        effect={effect}
        title="Modal example"
        onDismiss={() => toggleModal(!isOpen)}
      >
        <div>content here</div>
      </Modal>
    </React.Fragment>
  )
}

export default ModalExample
