import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
}

const NewMeetupPage = () => {
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage