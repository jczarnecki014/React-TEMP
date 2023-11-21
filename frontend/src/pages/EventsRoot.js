import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom';

const EventRootPage = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventRootPage;