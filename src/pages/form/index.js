import React, {useState} from 'react'

// Components
import Input from 'components/input'

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
        <label htmlFor="search">Search</label>
        <Input id="search" value={value} maxLength={20} onChange={setValue} />
        {!!value.length && (
          <button onClick={() => setValue('')} type="button">
            Clear input
          </button>
        )}
        <button disabled={!value.length} type="submit">
          Submit
        </button>
      </form>
      {searchTerm && <div>Searching: {searchTerm}</div>}
    </React.Fragment>
  )
}

export default Form
