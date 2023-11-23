import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    console.log(error)

    const statusCode = error.status;
    const message = undefined;


    return (
        <>
        <MainNavigation />
        <main>
            <h1>{statusCode}</h1>
            <h3>test</h3>
            {message && <p>{message}</p>}
        </main>
        </>
    )
}

export default ErrorPage;