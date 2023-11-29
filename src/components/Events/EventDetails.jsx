import { Link, Outlet,useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useQuery } from '@tanstack/react-query';

export default function EventDetails() {

  const eventId = useParams();

  const {data,isPending,isError,error} = useQuery({
    queryKey:['events',{eventId:'REPLACE'}]
  })

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>EVENT TITLE</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src="" alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">EVENT LOCATION</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
            </div>
            <p id="event-details-description">EVENT DESCRIPTION</p>
          </div>
        </div>
      </article>
    </>
  );
}
