import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Statistics';
import Home from './Home';
import Blog from './Blog';
import AppliedJobs from './AppliedJobs';
import JobDetails from './JobDetails';
import ErrorPage from './ErrorPage';
import jobsLoader from './Lodears';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/features.json'),
      },
      {
        path: 'featur/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('/features.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsLoader,

      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
