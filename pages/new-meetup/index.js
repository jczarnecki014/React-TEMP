import NewMeetupForm from '../../components/meetups/NewMeetupForm'   
import {useRouter} from 'next/router'  
const NewMeetup = () => {
    const router = useRouter();
    const AddMeetupHandler = async (meetup) => {
        const result = await fetch('./api/new-meetup',{
            method: 'POST',
            body:JSON.stringify(meetup),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        console.log(result)
        router.push('/')
    }
    
    return <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
}

export default NewMeetup