import React, { useContext } from 'react'
import '../Contact/Contact.css'
import { data } from '../Context/Context'

function Contact() {
  const { contact, setcontact } = useContext(data)

  const deleteContact = (e) => {
    const arr2 = [...contact]
    arr2.splice(e.target.id, 1)
    setcontact(arr2)
  }

  const holder = contact.map((val, id) => {
    return <tr key={id} >
      <td>{val.name}</td>
      <td>{val.contact}</td>
      <td>{val.email}</td>
      <td>{val.dob}</td>
      <td>{val.address}</td>
      <td><i class="ri-delete-bin-line"  onClick={deleteContact} id={id}></i></td>
    </tr>
  })

  return (
    <div className='container2'>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Delete</th>
        </tr>
        {contact.length === 0 ? <h3 className='heading'>No contacts</h3> : holder}
      </table>
    </div>
  )
}

export default Contact