import { Link, useNavigate } from 'react-router-dom';

import {useMutation} from '@tanstack/react-query'

import { queryClient } from '../util/http'

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {createNewEvent} from '../util/http.js'
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();
  const {mutate,isError,error,isPending} = useMutation({
    mutationFn: createNewEvent,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['events']})
      navigate('/events')
    }
  })
  function handleSubmit(formData) {
    console.log(formData)
    mutate({event:formData})
  }


  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button" disabled={isPending}>
            {isPending ? 'Submitning..':'Create'}
          </button>
        </>
      </EventForm>
      {isError &&
      <ErrorBlock title='Error has been occured !' message={error.info?.message || 'Sorry but we cant submit your event'} />
      }
    </Modal>
  );
}
