import { Link, Outlet,useParams, useNavigate } from 'react-router-dom';

import {queryClient} from '../util/http'

import {useQuery,useMutation} from '@tanstack/react-query'
import Header from '../Header.jsx';
import {fetchEvent} from '../util/http.js'

import LoadingIndicator from '../UI/LoadingIndicator.jsx'

import {deleteEvent} from '../util/http.js'
import Modal from '../UI/Modal';
import { useState } from 'react';

export default function EventDetails() {

  const {id} = useParams()
  const navigate = useNavigate();
  const [isDeleting,setIsDeleting] = useState(false);

  const {data,isPending,isError,error} = useQuery({
    queryKey: ['events',{id}],
    queryFn: ({signal}) => fetchEvent({signal,id})
  })

  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:['events'],
        refetchType: 'none'
    })
      navigate('/events')
    }
  })

  const onDeleteButtonHandler = () => {
    setIsDeleting(true)
  }
  const DeleteFunction = () => {
    mutate({id})
  }

  return (
    <>
      <Outlet />
      {isDeleting && 
        <Modal>
          <h1>Are you sure ?</h1>
          <p>Are you sure you wanna delete this event ? </p>
          <button className='button'>Yes</button>
          <br />
          <button>No</button>
          </Modal>
      }
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
      {isPending && <LoadingIndicator />}
        {data && 
          <>
            <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={onDeleteButtonHandler}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={'http://localhost:3000/'+data.image} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} {data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </>
        }
      </article>
    </>
  );
}
