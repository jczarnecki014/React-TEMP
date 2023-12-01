import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchEvents } from '../util/http';

import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';

export default function FindEventSection() {
  const searchElement = useRef();

  const {data,isPending,isError,error} = useQuery({
    queryKey: ['events',{searchTerm: searchElement}],
    queryFn: ({signal}) => fetchEvents({signal,searchTerm:'test'})
  })

  function handleSubmit(event) {
    event.preventDefault();
  }

  let content = <p>Please enter a search term and to find events.</p>;

  // if (isPending) {
  //   content = <LoadingIndicator />;
  // }

  // if (isError) {
  //   content = (
  //     <ErrorBlock title="An error occurred" message="Failed to fetch events" />
  //   );
  // }

  // if (data) {
  //   content = (
  //     <ul className="events-list">
  //       {data.map((event) => (
  //         <li key={event.id}>
  //           <EventItem event={event} />
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
