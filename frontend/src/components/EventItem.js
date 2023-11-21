import classes from './EventItem.module.css';
import {Link,useSubmit} from 'react-router-dom'

function EventItem({ event }) {

  const submit = useSubmit();

  function startDeleteHandler() {
    let promp = window.confirm()

    if(promp){
      submit(null,{method:'delete'})
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
