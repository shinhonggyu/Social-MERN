import './register.css';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="registerBox" onSubmit={submitHandler}>
            <input
              ref={username}
              required
              placeholder="Username"
              className="loginInput"
            />
            <input
              ref={email}
              required
              type="email"
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              required
              type="password"
              minLength="6"
              placeholder="Password"
              className="loginInput"
            />
            <input
              ref={passwordAgain}
              required
              type="password"
              minLength="6"
              placeholder="Password Again"
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
