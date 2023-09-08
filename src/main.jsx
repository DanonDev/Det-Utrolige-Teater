import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Events from './pages/Events.jsx';
import Actors from './pages/Actors.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ActorsInfo from './pages/ActorsInfo.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'events',
        element: <Events />,
    },
    {
        path: 'actors',
        element: <Actors />,
    },
    {
        path: 'actors/:actor_id',
        element: <ActorsInfo />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
