import MeetupList from '../components/meetups/MeetupList'
import { useState,useEffect } from 'react';
import { MongoClient } from 'mongodb';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/landing_page/template_background/73142/12235d7b1498da10d0261ebd76a993a4.jpg',
        address: 'Some adres 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/landing_page/template_background/73142/12235d7b1498da10d0261ebd76a993a4.jpg',
        address: 'Some adres 5, 12345 Some City',
        description: 'This is a second meetup'
    },
];

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups} />
}



export async function getStaticProps(){
    
    const client = await MongoClient.connect(
        'mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');

      const meetups =  await meetupsCollection.find().toArray();

      client.close();

    return {
        props:{
            meetups: meetups.map((meetup)=>{return {
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }})},
        revalidate:10
    }
}

export default HomePage