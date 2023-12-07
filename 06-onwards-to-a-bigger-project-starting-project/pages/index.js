import MeetupList from '../components/meetups/MeetupList'


const DUMMY_DATA = [
    {
        id:'m1',
        title: 'A First metup',
        image: 'https://zastrzykinspiracji.pl/wp-content/uploads/2015/11/Wioska_%C5%9Bw.Miko%C5%82aja-780x600.jpg',
        address:'Some address 5, 12345 Some city',
        description: 'This is a first meetup'
    },
    {
        id:'m2',
        title: 'A Seccond metup',
        image: 'https://zastrzykinspiracji.pl/wp-content/uploads/2015/11/Wioska_%C5%9Bw.Miko%C5%82aja-780x600.jpg',
        address:'Some address 5, 12345 Some city',
        description: 'This is a first meetup'
    }
]



const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps(){
    return {
        props:{
            meetups: DUMMY_DATA
        },
        revalidate:10
    }
}

export default HomePage;