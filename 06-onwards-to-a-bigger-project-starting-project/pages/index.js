import MeetupList from '../components/meetups/MeetupList'
import { useState,useEffect, Fragment } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head'



const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>React meetups</title>
                <meta name='description' content='This is meetup page' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    ) 
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