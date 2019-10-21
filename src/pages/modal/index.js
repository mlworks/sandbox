import React, {useState} from 'react'

// Components
import Field from 'components/field'
import FieldRow from 'components/field-row'
import Input from 'components/input'
import Modal from 'components/modal'
import Spacing from 'components/spacing'

const ModalExample = () => {
  const [isOpen, toggleModal] = useState(false)
  const [effect, setModalEffect] = useState('dialog')
  const [coverage, setModalCoverage] = useState(80)

  return (
    <React.Fragment>
      <Modal
        coverage={coverage}
        isOpen={isOpen}
        effect={effect}
        title="Modal example"
        onDismiss={() => toggleModal(false)}
      >
        <Spacing padding="lg">
          <button type="button">go</button>

          <FieldRow>
            <Field id="firstName" label="First Name">
              <Input id="firstName" />
            </Field>

            <Field id="lastName" label="Last Name">
              <Input id="lastName" />
            </Field>
          </FieldRow>

          <button type="button" onClick={() => toggleModal(false)}>
            close modal
          </button>
        </Spacing>
      </Modal>

      <FieldRow>
        <Field
          id="coverage"
          label="Modal Coverage"
          caption={`Coverage: ${coverage}%`}
        >
          <input
            id="coverage"
            type="range"
            min="50"
            max="100"
            step="5"
            value={coverage}
            onChange={event => setModalCoverage(event.target.valueAsNumber)}
          />
        </Field>

        <Field id="effect" label="Modal Animation Style">
          <select
            id="effect"
            value={effect}
            onChange={event => setModalEffect(event.target.value)}
          >
            <option value="dialog">Dialog</option>
            <option value="slide-top">Slide From Top</option>
            <option value="slide-left">Slide From Left</option>
            <option value="slide-right">Slide From Right</option>
            <option value="slide-bottom">Slide From Bottom</option>
          </select>
        </Field>
      </FieldRow>

      <button type="button" onClick={() => toggleModal(true)}>
        open modal
      </button>
    </React.Fragment>
  )
}

export default ModalExample
