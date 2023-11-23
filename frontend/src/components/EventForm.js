import { useNavigate,Link,Form, json,useNavigation, redirect, useActionData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const data = useActionData();

  const isSubmiting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error)=>{
            return <li>{error}</li>
          })}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"  defaultValue={event && event.title && event.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image"  defaultValue={event && event.image && event.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date"   defaultValue={event && event.date && event.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5"  defaultValue={event && event.description && event.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmiting}>
          Cancel
        </button>
        <button disabled={isSubmiting}>{isSubmiting ? 'submiting...':'save'}</button>
      </div>
    </Form>
  );
}



export const action = async ({request,params}) => {
  const method = request.method;
  const data = await request.formData();

  
  let url = 'http://localhost:8080/events'

  if( method === 'PATCH'){
    const eventId = params.eventId
    url = 'http://localhost:8080/events/' + eventId
  }


  const eventDetails = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch(url,{
    method: method,
    body: JSON.stringify(eventDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })


  if(response.status === 422){
    /// error occured
    return response
  }

  if(!response.ok){
    throw json({message:'Can not fetch data!'},{status:500})
  }

  return redirect('/events')



}

export default EventForm;