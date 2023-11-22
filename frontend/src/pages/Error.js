import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    const statusCode = error.status;
    const message = error.data.message

    return (
        <>
        <MainNavigation />
        <main>
            <h1>{statusCode}</h1>
            <p>{message}</p>
        </main>
        </>
    )
}

export default ErrorPage;