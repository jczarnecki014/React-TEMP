import { useParams } from "react-router-dom"

const EventDetailPage = () => {
    const parms = useParams();
    return (
        <>
        <h1>Event Detail Page</h1>
        <p>{parms.someId}</p>
        </>  
    )
}

export default EventDetailPage