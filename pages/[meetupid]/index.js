import { MongoClient} from 'mongodb';
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

    const client = await MongoClient.connect('mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetupsID = await meetupsCollection.find({}).project({id:1}).toArray()

    client.close()

   return {
    paths:meetupsID.map((meetupid) => {
        return {
            params:{
                meetupid: meetupid._id.toString()
            }
        }
    }),
    fallback: false
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



