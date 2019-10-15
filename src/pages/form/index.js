import React, {useState} from 'react'

// Components
import Input from 'components/input'
import Modal from 'components/modal'
import Spacing from 'components/spacing'

const Form = () => {
  const [value, setValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <React.Fragment>
      <Modal effect="slide">
        <form
          onSubmit={event => {
            event.preventDefault()
            setSearchTerm(value)
            setValue('')
          }}
        >
          <label htmlFor="search">Search</label>
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
          <button disabled={!value.length} type="submit">
            Submit
          </button>
        </form>
      </Modal>
      {searchTerm && <Spacing marginTop="lg">Searching: {searchTerm}</Spacing>}
    </React.Fragment>
  )
}

export default Form
