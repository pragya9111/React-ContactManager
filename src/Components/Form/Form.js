import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../Context/Context'
import '../Form/Form.css'

function Form() {

  const navigate = useNavigate()
  const { contact, setcontact } = useContext(data)
  const [value, setvalue] = useState({
    name: "",
    contact: "",
    email: "",
    dob: "",
    address: ""
  })

  const formhandle = (e) => {
    e.preventDefault()
    const arr = [...contact]
    arr.push(value)
    setcontact(arr)
    setvalue({
      name: "",
      contact: "",
      email: "",
      dob: "",
      address: ""
    })
    navigate('/contact')
  }

  const inphandle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
  }

  return (
    <div className='container1'>
      <div className='box' >
        <div className='head'>
          <p>Enter contact details</p>
        </div>
        <div className='form'>
          <form onSubmit={formhandle}>
            <div className='inp1'>
              <i class="ri-user-line"></i>
              <input type="text" name="name" value={value.name} onChange={inphandle} placeholder='Name' />
            </div>
            <div className='inp1'>
              <i class="ri-phone-line"></i>
              <input type="number" name="contact" value={value.contact} onChange={inphandle} placeholder='Number' />
            </div>
            <div className='inp1'>
              <i class="ri-mail-line"></i>
              <input type="text" name="email" value={value.email} onChange={inphandle} placeholder='Email' />
            </div>
            <div className='inp1'>
              <i class="ri-calendar-event-line"></i>
              <input type="date" name="dob" value={value.dob} onChange={inphandle} placeholder='Date of Birth' />
            </div>
            <div className='inp1'>
              <i class="ri-map-pin-line"></i>
              <input type="text" name="address" value={value.address} onChange={inphandle} placeholder='Address' />
            </div>
            <input type="submit" value="Save" className='save' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form