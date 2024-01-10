import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient } from "mongodb";

const MeetupDetails = () => {
    return <MeetupDetail 
        image="https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/landing_page/template_background/73142/12235d7b1498da10d0261ebd76a993a4.jpg" 
        title="A first meetup" 
        address="Some adres 5, 12345 Some City" 
        description="This is a first meetup" />
} 

export async function getStaticPaths() {

    const client = await MongoClient.connect(
        'mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');

      const meetups = await meetupsCollection.find({}).project({_id:1}).toArray();

      client.close();

    return {
        fallback:false,
        paths: meetups.map((meetup)=>({
            params:{
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    return {
        props:{
            meetupData:{
                id: meetupId,
                image:"https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/landing_page/template_background/73142/12235d7b1498da10d0261ebd76a993a4.jpg", 
                title:"A first meetup",
                address:"Some adres 5, 12345 Some City", 
                description:"This is a first meetup" 
            }
        }
    }
}

export default MeetupDetails
