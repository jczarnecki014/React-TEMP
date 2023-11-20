import  {useLoaderData} from 'react-router-dom'

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;


export const Loader = async() => {
    const response = await fetch('http://localhost:8080/events');
      if (!response.ok) {
        throw new Error('Problem with fetching data')
      } else {
        return response;
      }
}