import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../src/App.css'
import { data } from './Components/Context/Context'
import Form from './Components/Form/Form'
import Nav from './Components/Navbar/Nav'
import Contact from './Components/Contact/Contact'

function App() {

  const [contact, setcontact] = useState([])

  return (
    <div className='main'>
      <div className='bg' >
        <data.Provider value={{ contact, setcontact }}>
          <Nav />
          <Routes>
            <Route path='/' element={<Form/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </data.Provider>
      </div>

    </div>
  )
}
export default App