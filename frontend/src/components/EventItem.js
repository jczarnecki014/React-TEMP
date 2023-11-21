import classes from './EventItem.module.css';
import {Link,useSubmit} from 'react-router-dom'

function EventItem({ event }) {
  function startDeleteHandler() {
    let promp = window.confirm()
    const submit = useSubmit();

    if(promp){
      submit({},{method:'DELETE'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to='edit' relative='path'>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
