import {MongoClient} from 'mongodb'

const handler = async (req,res) => {
    const data = req.body;
    const method = req.method
    if(method === 'POST'){
        const client = await MongoClient.connect('mongodb+srv://kubacz00:Lukasz85@cluster0.jn7jyug.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json({message:'meetup inserted'})
    }
    else{
        res.status(404).json({message:'Not found'})
    }
}

export default handler;

