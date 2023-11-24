import { redirect } from "react-router-dom/dist/umd/react-router-dom.development";


export const getToken = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    return token;
}

export const checkAuthLoader = () => {
    const token = localStorage.getItem('token')

    if(!token){
        return redirect('/auth')
    }
}