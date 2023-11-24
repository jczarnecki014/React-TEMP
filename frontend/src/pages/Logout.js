import { redirect } from "react-router-dom/dist/umd/react-router-dom.development";
import { getToken } from "../utilise/auth";

export const action = () => {

    const token = getToken();

    if(token){
        localStorage.removeItem('token');
    }

    return redirect('/')
}