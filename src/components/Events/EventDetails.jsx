import { Link, Outlet,useParams } from 'react-router-dom';

import {useQuery} from '@tanstack/react-query'
import Header from '../Header.jsx';
import {fetchEvent} from '../util/http.js'

export default function EventDetails() {

  const {id} = useParams()

  const {data,isPending,isError,error} = useQuery({
    queryKey: ['events',{id}],
    queryFn: ({signal}) => fetchEvent({signal,id})
  })

  console.log(id)

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
          <h1>title</h1>
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
