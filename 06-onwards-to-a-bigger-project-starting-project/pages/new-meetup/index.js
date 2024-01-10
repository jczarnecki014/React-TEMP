import NewMeetupForm from '../../components/meetups/NewMeetupForm'

import {useRouter} from 'next/router'

const NewMeetup = () => {

    const router = useRouter();

    const AddMeetupHandler = async (enteredMeetupData) => {
        const result = await fetch('/api/new-meetups',{
            method:'POST',
            body: JSON.parse(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        });

        console.log(result)

        router.push('/')

    }

    return <NewMeetupForm onAddMeetup={AddMeetupHandler} />
}

export default NewMeetup