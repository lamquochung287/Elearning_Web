import React from 'react';
import './LoginPage.scss';
import { FcGoogle } from 'react-icons/fc';
import {
  BsFacebook,
  BsApple
} from 'react-icons/bs';
import TextField from '@mui/material/TextField';

export const LoginPage = () => {
  return (
    <div className="login_page_container">
      <div className="login_page_form_container">
        <h2>Log in to your Elearning account</h2>
        <button className="btn_form display_flex">
          <FcGoogle
            style={{
              width: '2rem',
              height: '2rem'
            }}
          />
          Continue with Google
        </button>
        <button className="btn_form display_flex">
          <BsFacebook
            style={{
              color: '#4267B2ff',
              width: '2rem',
              height: '2rem'
            }}
          />
          Continue with Facebook
        </button>
        <button className="btn_form display_flex">
          <BsApple
            style={{
              width: '2rem',
              height: '2rem'
            }}
          />
          Continue with Apple
        </button>
        <form className="form_container">
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button>Log in</button>
        </form>

        <h2 className="form_text">
          or{' '}
          <a
            href="#"
            target="_self"
          >
            Forgot Password
          </a>
        </h2>
        <hr />
        <h2 className="form_text">
          Don't have an account?{' '}
          <a
            href="#"
            target="_self"
          >
            Sign up
          </a>
        </h2>
        <h2 className="form_text">
          <a
            href="#"
            target="_self"
          >
            Log in with your organization
          </a>
        </h2>
      </div>
    </div>
  );
};

export default LoginPage;
