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
import EventDetailPage from './page/EventDetailPage';
import NewEventPage from './page/NewEventPage';
import EditEventPage from './page/EditEventPage';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootPage />, 
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
            {path:':someId',element: <EventDetailPage />},
            {path:'new',element: <NewEventPage />},
            {path:':someId/edit',element: <EditEventPage />},
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
