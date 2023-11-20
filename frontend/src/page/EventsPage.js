import {Link} from 'react-router-dom'

const DUMMY_DATA = [
    {id:'p1',title:'Event Page 1'},
    {id:'p2',title:'Event Page 2'},
    {id:'p3',title:'Event Page 3'},
    {id:'p4',title:'Event Page 4'},
]

const EventPage = () => {
    return (
        <>
            <h1>Event Page</h1>
            <ul>
                {DUMMY_DATA.map((event)=><li><Link to={event.id}>{event.title}</Link></li>)}
            </ul>
        </>
    )
}

export default EventPage