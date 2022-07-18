import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  
  //add all the other info you have in postico that you need filled out
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        email: email,
        password: password,
        address: address,
      },
    });
  }; // end registerUser

  return (
    <>
    <div className='registerContainer'>
    <div className='text-3xl'>
     "The Razor Blades"
    </div>
    
    <div className='text-xl'> The Premiere Reginald Fan Club</div>
    <br></br>
    <form className="formPanel" onSubmit={registerUser}>
      <div className='text-2xl'>Register User</div>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div></div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            value={address}
            required
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
      </div>
      
      <div>
        <input className="btn text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2" type="submit" name="submit" value="Register" />
      </div>
      
    </form>
    {/* <div>
      <Link to='/login'>
      <button>Login</button>
      </Link>
      </div> */}
    </div>
    </>
  );
}

export default RegisterForm;
