import { useNavigate,useNavigation,useActionData,redirect,json, Form } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form className={classes.form} method={method}>
    {data && data.errors && <ul>
        {Object.values(data.errors).map((error)=>{
          return <li key={error}>{error}</li>
        })}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmiting}>
          Cancel
        </button>
        <button disabled={isSubmiting}>{isSubmiting ? 'Submiting..' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export const action = async ({request,params}) => {

  const method = request.method;

  const data =  await request.formData();
 const eventDetails = {
     title: data.get('title'),
     image: data.get('image'),
     date: data.get('date'),
     description: data.get('description'),
 }

  let url = 'http://localhost:8080/events'

  if(method === 'PATCH'){
    const eventId = params.someId
    url = 'http://localhost:8080/events/'+eventId 
  }

  console.log(eventDetails)


  const response = await fetch(url,{
     method: method,
     body: JSON.stringify(eventDetails),
     headers: {
         'Content-Type':'application/json'
     }
 })

//  if(response.status === 422){
//      return response;
//  }

//   if(!response.ok){
//      throw json({message:'Could not save event'},{status:500})
//   }

//   return redirect('/events')
}