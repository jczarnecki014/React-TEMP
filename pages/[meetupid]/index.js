
import classes from './MeetupDetail.module.css';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import {useRouter} from 'next/router'

const MeetupDetails = () =>{

    const DUMMY_DATA = {
        id:'m1',
        title:'Some title',
        description: 'Some description about this meeting',
        address: 'Some address',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimIH04DvCvWcdolJuB0fgvOmDSXVBYdzxsQ&usqp=CAU'
    }

    return (
        <MeetupDetail titile={DUMMY_DATA.title} description={DUMMY_DATA.description} address={DUMMY_DATA.address} image={DUMMY_DATA.image} />
    )
}

export default MeetupDetails