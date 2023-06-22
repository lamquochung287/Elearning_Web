import React from 'react';
import './SignUpPage.scss';
export const SignUpPage = () => {
  return (
    <div className="sign_up_page_container">
      <h2>Sign up and start learning</h2>
      <input
        type="text"
        placeholder="Full name"
      />
      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />
      <button>Sign Up</button>
      <span>
        By signing up, you agree to our <u>Terms of Use</u> and{' '}
        <u>Privacy Policy</u>.
      </span>
      <hr />
      <h3>
        Already have an account?{' '}
        <a
          href="#"
          target="_self"
        >
          Log in
        </a>
      </h3>
    </div>
  );
};

export default SignUpPage;
