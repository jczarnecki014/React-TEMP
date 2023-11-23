import { redirect,json } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}



export const action = async ({request}) => {

  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode') 

  if(mode !== 'login' && mode !== 'singup'){
    throw json({message:'Unsupported mode'},{status: 422});
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8000/' + mode,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if(response.status === 422 || response.status === 401){
    return response;
  }

  if(!response.ok){
    throw json({message:'Could not authenticate user.'},{status: 500})
  }

  return redirect('/')
}


export default AuthenticationPage;