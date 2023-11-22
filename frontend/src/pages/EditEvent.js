import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage() {
  console.log('test')
  const data = useRouteLoaderData('event-details')
  return (
    <EventForm event={data.event} method='PATCH' />
  )
}





export default EditEventPage;
