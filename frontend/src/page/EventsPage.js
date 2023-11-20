import  {useLoaderData} from 'react-router-dom'

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
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
        // too continue
      } else {
        const resData = await response.json();
        console.log(resData.events)
        return resData.events;
      }
}