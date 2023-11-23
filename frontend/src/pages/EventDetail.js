import { json, redirect, useParams, useRouteLoaderData } from 'react-router-dom';
import EvenetItem from '../components/EventItem'

function EventDetailPage() {
  const data = useRouteLoaderData('event-details');

  return (
    <>
      <EvenetItem  event={data.event} />
    </>
  );
}


export const loader = async ({request,params}) => {
  const response = await fetch('http://localhost:8080/events/'+params.eventId)

  if(!response.ok){
    throw json({message:'Event with that id doesnt exist !'})
  }

  return response;

}

export const action = async ({request,params}) => {
  const eventId = params.eventId;
  const method = request.method;

  const response = await fetch('http://localhost:8080/events/'+eventId,{
    method,
    headers:{
      'Content-Type': 'application/json'
    }
  })

  return redirect('/events')

}


export default EventDetailPage;
