import { json, redirect } from 'react-router-dom/dist/umd/react-router-dom.development';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}


export const action = async ({request,params}) => {
  const mode = new URL(request.url).searchParams.get('mode')

  if(mode !== 'login' && mode !== 'signup'){
    throw json({message:'Unsupported mode'},{status:500})
  }

  const data = await request.formData()
  let url = 'http://localhost:8080/'+mode

  const userDetails = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const response = await fetch(url,{
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(response.status == 401 || response.status == 422){
    return response;
  }

  const resData = await response.json()
  
  localStorage.setItem('token', resData.token)


  return redirect('/')

}


export default AuthenticationPage;