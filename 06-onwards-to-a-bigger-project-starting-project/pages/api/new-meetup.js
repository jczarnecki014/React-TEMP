import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;



// import { MongoClient } from "mongodb";

// const handler = async (req,res) => {
//     if(req.method === 'POST'){
//         const data = req.body
        
//         const client = await MongoClient.connect('mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority')

//         const db = client.db();

//         const MeetupCollection = db.collection('meetups')
//         const result = MeetupCollection.insertOne(data)

//         console.log(result)

//         client.close()

//         res.status(201).json({message:'Meetup inserted!'})
//     }
// }

// export default handler;