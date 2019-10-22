import React, {useState} from 'react'

// Components
import ButtonPrimary from 'components/button-primary'
import Card from 'components/card'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import FormExample from 'components/form-example'
import Input from 'components/input'
import Modal from 'components/modal'
import Select from 'components/select'
import Spacing from 'components/spacing'

const ModalExample = () => {
  const [isOpen, toggleModal] = useState(false)
  const [effect, setModalEffect] = useState('dialog')
  const [coverage, setModalCoverage] = useState(80)

  return (
    <React.Fragment>
      <Card>
        <h2>Modal Example</h2>
        <p>
          Play around with the controls below to see how the modal animates.
        </p>
        <p>
          Once modal is opened, try tabbing / shift+tabbing. Focus should be
          trapped inside the modal until the modal is closed. If you press 'ESC'
          key, it will dismiss the modal.
        </p>
      </Card>
      <Card>
        <FieldRow>
          <Field id="coverage" label={`Modal Coverage: ${coverage}%`}>
            <Input
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
            <Select
              id="effect"
              options={[
                {
                  value: 'dialog',
                  label: 'Dialog',
                },
                {
                  value: 'slide-top',
                  label: 'Slide From Top',
                },
                {
                  value: 'slide-left',
                  label: 'Slide From Left',
                },
                {
                  value: 'slide-right',
                  label: 'Slide From Right',
                },
                {
                  value: 'slide-bottom',
                  label: 'Slide From Bottom',
                },
              ]}
              value={effect}
              onChange={event => setModalEffect(event.target.value)}
            />
          </Field>
        </FieldRow>
        <Spacing marginTop="xlg">
          <ButtonPrimary onClick={() => toggleModal(true)}>
            Open Modal
          </ButtonPrimary>
        </Spacing>
      </Card>

      <Modal
        coverage={coverage}
        isOpen={isOpen}
        effect={effect}
        title="Modal example"
        onDismiss={() => toggleModal(false)}
      >
        <Spacing padding="lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            egestas condimentum aliquam. Donec nec libero magna. Nullam
            malesuada rhoncus purus vitae sagittis. Etiam bibendum venenatis
            nisi quis congue. Aenean porta, nulla et varius elementum, tortor
            tortor sagittis odio, id tincidunt lacus risus quis diam. Nunc id
            facilisis leo, at rhoncus nisl. Aenean tincidunt, sem vel commodo
            dapibus, lectus felis venenatis magna, quis mollis tellus dolor non
            augue. Morbi eget neque auctor diam luctus ullamcorper. Integer
            lacus risus, ullamcorper faucibus elementum et, accumsan eu turpis.
            Duis cursus ipsum sed tempor lobortis.
          </p>

          <Spacing margin="lg 0">
            <FormExample />
          </Spacing>

          <p>
            Donec tristique nulla a sem condimentum, id tincidunt nulla egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Integer sollicitudin elementum dui, vitae
            efficitur nunc eleifend eget. Fusce sit amet ex ut nisl pulvinar
            feugiat. Aliquam in odio a lectus tincidunt aliquet. In tincidunt
            non ante non sollicitudin. In vitae purus nulla. In commodo arcu
            elit, nec semper orci sodales eget. Nunc nec velit rhoncus, gravida
            dolor eget, aliquet lorem. Nulla eget ultrices augue. Pellentesque
            ornare erat eu tristique ornare. Donec vitae vulputate orci, nec
            pulvinar dolor. Sed a efficitur lacus.
          </p>

          <p>
            Sed posuere laoreet sem, id ultrices urna dignissim ut. Sed sit amet
            convallis ligula. Pellentesque aliquet felis quam, vitae volutpat
            enim accumsan et. Suspendisse nec libero et nisl imperdiet porta.
            Suspendisse fermentum velit ut egestas iaculis. Donec dignissim
            blandit lorem a semper. Suspendisse tellus nunc, accumsan a mauris
            at, ullamcorper lobortis quam. Aenean hendrerit tempor ligula, ac
            eleifend tellus laoreet ut. Nunc a nisi sed urna viverra accumsan.
            Aliquam sem nisl, aliquet ut massa vel, hendrerit facilisis eros.
            Suspendisse vitae convallis eros. Mauris quis vulputate nisi. Aenean
            luctus, nisi at feugiat sollicitudin, leo est tincidunt massa, quis
            vehicula massa elit vel libero. Ut efficitur augue vel orci molestie
            convallis.
          </p>

          <Spacing marginTop="lg">
            <ButtonPrimary onClick={() => toggleModal(false)}>
              Close Modal
            </ButtonPrimary>
          </Spacing>
        </Spacing>
      </Modal>
    </React.Fragment>
  )
}

export default ModalExample
