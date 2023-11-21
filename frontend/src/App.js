// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import EventPage,{Loader as eventsLoader} from './page/EventsPage';
import RootPage from './page/RootPage';
import EventRootPage from './page/EventRootPage';
import HomePage from './page/HomePage';
import EventDetailPage,{loader as eventDetailLoader,action as eventDetailsAction} from './page/EventDetailPage';
import {action as newEventAction} from '../src/components/EventForm'
import NewEventPage from './page/NewEventPage';
import EditEventPage from './page/EditEventPage';
import ErrorPage from './page/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootPage />,
      errorElement:  <ErrorPage />,
      children:[
        {index:true, element: <HomePage />},
        {
          path:'events',
          element:<EventRootPage />,
          children: [
            {
              index:true,
              element:<EventPage />,
              loader: eventsLoader
            },
            {
              path:':someId',
              id:'event-detail',
              loader:eventDetailLoader,
              children:[
                {
                  index:true,
                  element: <EventDetailPage />,
                  action: eventDetailsAction
                },
                {
                  path:'edit',
                  element: <EditEventPage />,
                  action:newEventAction
                }

              ]
            },
            {path:'new',element: <NewEventPage />, action:newEventAction},
          ]
        }
      ]
    },
  ])

  return <RouterProvider router={router}>
    <App />
  </RouterProvider>;
}

export default App;
