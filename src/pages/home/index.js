import React from 'react'

// Components
import Input from 'components/input'

const Home = () => (
  <div>
    home
    <Input maxLength={20} />
    <Input value="testing" maxLength={10} />
    <Input placeholder="Test" />
  </div>
)

export default Home
