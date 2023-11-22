import { useNavigate,Link,Form, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
  console.log(method)
  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event && event.title && event.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event && event.image && event.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required  defaultValue={event && event.date && event.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event && event.description && event.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}



export const action = async ({request,parms}) => {
  console.log('test33')

  const method = request.method;
  const data = await request.formData();
  
  let url = 'http://localhost:8080/events'

  if( method === 'PATCH'){
    const eventId = parms.eventId
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


  if(!response.ok){
    throw json({message:'Can not fetch data!'},{status:500})
  }

  return redirect('/events')



}

export default EventForm;