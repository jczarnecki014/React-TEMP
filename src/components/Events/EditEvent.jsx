import { Link, useNavigate,useParams } from 'react-router-dom';
import { useQuery,useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

import {queryClient,fetchEvent,updateEvent} from '../util/http.js'
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const {id} = useParams();

  const {data,isPending,isError,error} = useQuery({
    queryKey: ['events',{id}],
    queryFn: ({signal}) => fetchEvent({signal,id})
  })

  const {mutate,isPending:mutateIsPending,isError:mutateIsError,error:mutateError} = useMutation({
    mutationFn: updateEvent,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['events']})
      navigate('/events')
    }
  })


  function handleSubmit(formData) {
    mutate({id,event:formData})
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      {data &&
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
      }
      {isPending && <LoadingIndicator />}
      {isError && <ErrorBlock title="We cant fetch this event" message={error.info?.message || 'We cant fetch this event, try agaian latter'}/>}
    </Modal>
  );
}
