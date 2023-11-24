import { useState } from 'react';
import { Form, } from 'react-router-dom';

import classes from './AuthForm.module.css';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

function AuthForm() {
  const [params] = useSearchParams()

  const isLogin = params.get('mode') === 'login'


  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`mode=${isLogin ? 'login':'signup'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
