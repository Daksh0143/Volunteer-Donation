import React, { useState } from 'react'

const Donate = () => {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [message,setMessage] =useState("")
  const [amount,setAmount] =useState("")
  const [disableBtn,setDisableBtn]=useState(false)
  return (
    <section className='donate'>
        <form>
          <div>
            <img src='/logo.png' alt='logo ' />
          </div>
          <div>
            <label>Show Your Love For Poors</label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Donation (USD)'/>
          </div>
          <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type='text'placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <button className='btn' 
          disabled={disableBtn}
          type='submit'>Donate {amount ? `$${amount}` : "$0"}</button>
        </form>
    </section>
  )
}

export default Donate