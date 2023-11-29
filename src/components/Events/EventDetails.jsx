import { Link, Outlet,redirect,useParams,useNavigate } from 'react-router-dom';
import { queryClient } from '../../util/http.js';

import Header from '../Header.jsx';
import { useQuery,useMutation } from '@tanstack/react-query';

import { deleteEvent, fetchEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {

  const {id} = useParams();
  const navigate = useNavigate();

  const {mutate,isPending:isMutatePending, isError:isMutateError, error:mutateError} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(['events'])
      navigate('/events')
    }
  })

  const {data,isPending:isQueryPending,isError:isQueryError, error:queryError} = useQuery({
    queryKey:['events',{eventId:id}],
    queryFn: ({signal}) => fetchEvent({id,signal})
  })

  const onDeleteClickHandler = () => {
    const prompt = window.confirm("Are you sure to delete this event ?")
    console.log(prompt)
    if(!prompt){
      return;
    }
    mutate({id})
  }

  const isPending = isMutatePending || isQueryPending

  const error = mutateError || queryError || undefined

  console.log(isQueryPending)


  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
        <article id="event-details">
        {isPending && <span className="loader">.</span>}
        {data && 
          <>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={onDeleteClickHandler}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={'http://localhost:3000/'+data.image} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
          </>
        }
          {error && <ErrorBlock title='An error occurred"!' message={error.info?.message || 'Failed to fetch event'} />}
        </article>
    </>
  )
}
