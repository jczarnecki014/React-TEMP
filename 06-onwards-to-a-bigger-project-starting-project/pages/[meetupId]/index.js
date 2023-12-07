import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
    return (
        <MeetupDetail image='https://zastrzykinspiracji.pl/wp-content/uploads/2015/11/Wioska_%C5%9Bw.Miko%C5%82aja-780x600.jpg' title='A First metup' address='Some address 5, 12345 Some city' description='This is a first meetup' />
    )
}


export async function getStaticProps(context){
    const meetupId = context.props.meetupId

    console.log(meetupId)

    return {
        props:{
            id:meetupId,
            title: 'A First metup',
            image: 'https://zastrzykinspiracji.pl/wp-content/uploads/2015/11/Wioska_%C5%9Bw.Miko%C5%82aja-780x600.jpg',
            address:'Some address 5, 12345 Some city',
            description: 'This is a first meetup' 
        }
    }
}

export default MeetupDetails