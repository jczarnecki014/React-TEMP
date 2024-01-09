import { MongoClient } from "mongodb";

const handler = async (req,res) => {
    if(req.method === 'POST'){
        const data = req.body
        const {title,image,address,description} = data
        
        const client = await MongoClient.connect('mongodb+srv://kubacz00:<Lukasz85>@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority')

        const db = client.db();

        const MeetupCollection = db.collection('meetups')
        const result = MeetupCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({message:'Meetup inserted!'})
    }
}

export default handler;