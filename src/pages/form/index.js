import React, {useState} from 'react'

// Components
import Input from 'components/input'
import Modal from 'components/modal'
import Spacing from 'components/spacing'

const Form = () => {
  const [value, setValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, toggleModal] = useState(false)
  const [effect, setModalEffect] = useState('dialog')

  return (
    <React.Fragment>
      <button type="button" onClick={() => toggleModal(!isOpen)}>
        toggle modal
      </button>
      <select
        value={effect}
        onChange={event => setModalEffect(event.target.value)}
      >
        <option value="dialog">Dialog</option>
        <option value="slide-top">Slide Down</option>
        <option value="slide-left">Slide Right</option>
        <option value="slide-right">Slide Left</option>
        <option value="slide-bottom">Slide Up</option>
      </select>
      <Modal
        isOpen={isOpen}
        effect={effect}
        title="Form example"
        onDismiss={() => toggleModal(!isOpen)}
      >
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
