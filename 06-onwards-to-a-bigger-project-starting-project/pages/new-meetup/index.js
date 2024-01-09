import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {

    const AddMeetupHandler = (meetupData) => {
        console.log(meetupData)
    }

    return <NewMeetupForm onAddMeetup={AddMeetupHandler} />
}

export default NewMeetup