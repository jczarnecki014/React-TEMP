import { Link, useNavigate } from 'react-router-dom';

import {useMutation} from '@tanstack/react-query'

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {createNewEvent} from '../util/http.js'

export default function NewEvent() {
  const navigate = useNavigate();
  const {mutate,error} = useMutation({
    mutationFn: createNewEvent
  })

  console.log(error?.info)

  function handleSubmit(formData) {
    mutate(formData)
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      </EventForm>
    </Modal>
  );
}
