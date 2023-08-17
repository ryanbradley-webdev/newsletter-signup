import { useState } from 'react'
import Form from './components/form/Form'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      
      <Form
        email={email}
        setEmail={setEmail}
      />

    </>
  )
}

export default App
