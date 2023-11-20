import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive})=>isActive ? classes.active : undefined} to="/events" relative='path' end>All Events</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? classes.active : undefined} to="new" end>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
