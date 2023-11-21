import {json,redirect,useRouteLoaderData } from "react-router-dom"
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail');
    return (
        <>
        <EventItem event={data.event} />
        </>  
    )
}

export default EventDetailPage

export const loader = async ({request,params}) => {
    const response = await fetch('http://localhost:8080/events/'+params.someId)

    if(!response.ok){
        throw json({message:'Could not fetch details for selected event.'},{status:500})
    }
    return response;

}

export const action = async ({request,params}) => {
    const response = await fetch('http://localhost:8080/events/'+params.someId,{
        method: request.method,
    })

    if(!response.ok){
        throw json({message:'Could not fetch details for selected event.'},{status:500})
    }
    
    return redirect('/events')
}