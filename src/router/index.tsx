import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
