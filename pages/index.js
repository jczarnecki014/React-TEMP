import MeetupList from "../components/meetups/MeetupList"
import {MongoClient} from 'mongodb'
const DUMMY_DATA = [
    {
        id:'m1',
        title:'Some title',
        description: 'Some description about this meeting',
        address: 'Some address',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimIH04DvCvWcdolJuB0fgvOmDSXVBYdzxsQ&usqp=CAU'
    },
    {
        id:'m2',
        title:'Some title2',
        description: 'Some description about this meeting2',
        address: 'Some address2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimIH04DvCvWcdolJuB0fgvOmDSXVBYdzxsQ&usqp=CAU'
    },
]

const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export const getStaticProps = async () => {
    const client = await MongoClient.connect('mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}).toArray()

    client.close()

    return {
        props:{
            meetups: meetups.map(meetup => {
                return {
                    id: meetup._id.toString(),
                    title: meetup.title,
                    address: meetup.address,
                    description: meetup.description,
                    image: meetup.image
                }
            })
        },
        revalidate: 10,
    }
}


export default HomePage