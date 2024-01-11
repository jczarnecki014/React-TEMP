import MeetupList from "../components/meetups/MeetupList"

const DUMMY_DATA = [
    {
        id:'m1',
        title:'Some title',
        description: 'Some description about this meeting',
        address: 'Some address',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimIH04DvCvWcdolJuB0fgvOmDSXVBYdzxsQ&usqp=CAU'
    },
    {
        id:'m2',
        title:'Some title2',
        description: 'Some description about this meeting2',
        address: 'Some address2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimIH04DvCvWcdolJuB0fgvOmDSXVBYdzxsQ&usqp=CAU'
    },
]

const HomePage = () => {
    return (
        <MeetupList meetups={DUMMY_DATA} />
    )
}

export default HomePage