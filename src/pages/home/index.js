import React, {useState} from 'react'

// Components
import Input from 'components/input'

const Home = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      home
      <Input value={value} maxLength={20} onChange={setValue} />
      <button onClick={() => setValue('')} type="button">
        Clear input
      </button>
    </div>
  )
}

export default Home
