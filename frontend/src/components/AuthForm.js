import { Form,useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';
import { useSearchParams,useActionData } from 'react-router-dom';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

function AuthForm() {
  const [params] = useSearchParams()
  const navigation = useNavigation();

  const isSubmiting = navigation.state === 'submitting'

  const isLogin = params.get('mode') === 'login'
  const data = useActionData();


  return (
    <>
      <Form method="post" className={classes.form}>
      {data && 
        <ul>
          {Object.values(data.errors).map((error) => {
            return <li key={error}>{error}</li>
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
          <button disabled={isSubmiting}>{isSubmiting ? "submiting..":"save"}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
