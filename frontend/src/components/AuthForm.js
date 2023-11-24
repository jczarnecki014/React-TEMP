import { useState } from 'react';
import { Form,Link,useSearchParams,useNavigation,useActionData } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {

  const [params] = useSearchParams();
  const isLogin = params.get('mode') === 'login'

  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'

  const data = useActionData();

  return (
    <>
      <Form method="post" className={classes.form}>
        {
          data && data.errors && 
        <ul>
            {Object.values(data.errors).map((error) => {
              return <li>{error}</li>
            })}
          </ul>
          }
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
          <Link to={`?mode=${isLogin ? 'signup':'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmiting}>{isSubmiting ? 'Submiting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}


export default AuthForm;
