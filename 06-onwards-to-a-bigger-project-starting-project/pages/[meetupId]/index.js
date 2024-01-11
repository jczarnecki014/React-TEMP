import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient,ObjectId } from "mongodb";
import Head from 'next/head'
import { Fragment } from "react";


const MeetupDetails = (props) => {

    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description} />
        </Fragment>
        )
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

    const client = await MongoClient.connect(
        'mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');

      const meetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId)
        });

      client.close();

    return {
        props:{
            meetupData:{
                id: meetup._id.toString(),
                image:meetup.image, 
                title:meetup.title,
                address:meetup.address, 
                description:meetup.description
            }
        }
    }
}

export default MeetupDetails
