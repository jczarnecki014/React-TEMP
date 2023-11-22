import { Link, json,useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some event',
  },
  {
    id: 'e2',
    title: 'Another event',
  },
];

function EventsPage() {
  const data = useLoaderData();
  console.log(data)
  return (
    <>
      {/* <EventsList /> */}
    </>
  );
}

// 1) Zastosowanie LOADERA do fetchowania danych
export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if(!response.ok){
    throw json({message:'Could not fetch the data'},{status:505})
  }

  return response;

}

export default EventsPage;
