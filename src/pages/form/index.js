import React, {useState} from 'react'

// Components
import Button from 'components/button'
import Field from 'components/field'
import FieldRow from 'components/field-row'
import Modal from 'components/modal'
import Input from 'components/input'
import Spacing from 'components/spacing'

const Form = () => {
  const [value, setValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <React.Fragment>
      <form
        onSubmit={event => {
          event.preventDefault()
          setSearchTerm(value)
          setValue('')
        }}
      >
        <FieldRow>
          <Field label="Search" id="search">
            <Input
              id="search"
              value={value}
              maxLength={20}
              placeholder="Search for something..."
              onChange={event => setValue(event.target.value)}
            />
            {!!value.length && (
              <Button onClick={() => setValue('')}>Clear input</Button>
            )}
          </Field>
        </FieldRow>

        <Button disabled={!value.length} type="submit">
          Submit
        </Button>
      </form>

      <Modal
        title={`Searching for "${searchTerm}"`}
        isOpen={!!searchTerm}
        onDismiss={() => setSearchTerm('')}
      >
        <Spacing padding="lg">Loading...</Spacing>
      </Modal>
    </React.Fragment>
  )
}

export default Form
