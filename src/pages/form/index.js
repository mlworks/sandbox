import React, {useState} from 'react'

// Components
import Field from 'components/field'
import FieldRow from 'components/field-row'
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
              onChange={setValue}
            />
            {!!value.length && (
              <button onClick={() => setValue('')} type="button">
                Clear input
              </button>
            )}
          </Field>
        </FieldRow>

        <button disabled={!value.length} type="submit">
          Submit
        </button>
      </form>
      {searchTerm && <Spacing marginTop="lg">Searching: {searchTerm}</Spacing>}
    </React.Fragment>
  )
}

export default Form
