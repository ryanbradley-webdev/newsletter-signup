import { useState } from 'react'
import Form from './components/form/Form'
import './App.css'
import Confirmation from './components/confirmation/Confirmation'

function App() {
  const [email, setEmail] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <>
      
      <Form
        email={email}
        setEmail={setEmail}
        hideForm={() => setVisible(true)}
      />

      <Confirmation
        email={email}
        visible={visible}
      />

    </>
  )
}

export default App
