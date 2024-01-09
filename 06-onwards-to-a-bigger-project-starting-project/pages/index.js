import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/landing_page/template_background/73142/12235d7b1498da10d0261ebd76a993a4.jpg',
        address: 'Some adres 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/landing_page/template_background/73142/12235d7b1498da10d0261ebd76a993a4.jpg',
        address: 'Some adres 5, 12345 Some City',
        description: 'This is a second meetup'
    },
];

const HomePage = () => {
    return <MeetupList meetups={DUMMY_DATA} />
}

export default HomePage