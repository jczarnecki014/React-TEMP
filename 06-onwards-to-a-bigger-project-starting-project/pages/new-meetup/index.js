// our-domain.com/new-meetup
import { useRouter } from 'next/router';
import Head from 'next/head'

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>New meetup form</title>
        <meta name='description' content='Add your new meetup' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetupPage;


// import NewMeetupForm from '../../components/meetups/NewMeetupForm'

// import {useRouter} from 'next/router'

// const NewMeetup = () => {

//     const router = useRouter();

//     const AddMeetupHandler = async (enteredMeetupData) => {
//         const result = await fetch('/api/new-meetup',{
//             method:'POST',
//             body: JSON.stringify(enteredMeetupData),
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         });

//         console.log(result)

//         router.push('/')

//     }

//     return <NewMeetupForm onAddMeetup={AddMeetupHandler} />
// }

// export default NewMeetup