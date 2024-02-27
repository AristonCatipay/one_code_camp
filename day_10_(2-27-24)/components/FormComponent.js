import React, {useState} from 'react'

function FormComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting.
    console.log('Credentials submitted.');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>  
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormComponent
