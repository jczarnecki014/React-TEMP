import { Link, useNavigate,useParams } from 'react-router-dom';

import { useQuery,useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

import LoadingIndicator from '../UI/LoadingIndicator.jsx'

import {updateEvent,queryClient} from '../../util/http.js'

export default function EditEvent() {
  const navigate = useNavigate();
  const {id} = useParams();

  const {data,isPending,isError,error} = useQuery({
    queryKey:['events',{eventId:id}],
  });

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const NewEventData = data.event
      const previousData = queryClient.getQueryData(['events',{eventId:id}])
      await queryClient.cancelQueries({queryKey:['events',{eventId:id}]})
      queryClient.setQueryData(['events',{eventId:id}],NewEventData)

      return {previousData}
    },
    onError: (error,data,context)=>{
      queryClient.setQueryData(['events',{eventId:id}], context.previousData)
    },
    onSettled: ()=>{
      queryClient.invalidateQueries(['events',{eventId:id}])
    }

  })

  let content;

  if(isError){
    content = 
    <>
      <ErrorBlock title='Failed to load event' message={error.info?.message || 'Failed to load event. Please check your inputs and try again later.'} />
      <div className='form-actions'>
        <Link to='../' className='button'>
          Okay
        </Link>
      </div>
    </>
  }

  if(isPending){
    content = <div className='center'>
      <LoadingIndicator /> 
    </div>
  }
  
  if(data){
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  function handleSubmit(formData) {
    mutate({id,event:formData})
    navigate('../')
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
