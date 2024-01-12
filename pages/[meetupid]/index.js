
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) =>{

    const DUMMY_DATA = {
        id:'m1',
        title:'Some title',
        description: 'Some description about this meeting',
        address: 'Some address',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimIH04DvCvWcdolJuB0fgvOmDSXVBYdzxsQ&usqp=CAU'
    }

    console.log(props.meetupid)

    return (
        <MeetupDetail titile={DUMMY_DATA.title} description={DUMMY_DATA.description} address={DUMMY_DATA.address} image={DUMMY_DATA.image} />
    )
}

export const getStaticPaths = async () => {
    return {
        paths:[
            {
                params:{
                    meetupid: 'm1'
                }
            },
            {
                params:{
                    meetupid: 'm2'
                }
            },
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const meetupid = context.params

    return {
        props:{
            meetupid
        }
    }
}

export default MeetupDetails