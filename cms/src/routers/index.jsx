import { createBrowserRouter, redirect } from 'react-router-dom';
import Register from '../views/Register';
import Login from '../views/Login';
import BaseLayout from '../layout/BaseLayout';
import Home from '../views/Home';
import MyCoins from '../views/MyCoins';
import UpdateCoin from '../views/UpdateCoin';
import Toastify from 'toastify-js';

const url = 'https://api.p2.lc2s6.foxhub.space';
const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register url={url} />,
  },
  {
    path: '/login',
    element: <Login url={url} />,
    loader: async () => {
      if (localStorage.access_token) {
        Toastify({
          text: 'Already Logged In',
          duration: 3000,
          destination: 'https://github.com/apvarun/toastify-js',
          newWindow: true,
          close: true,
          gravity: 'top', // `top` or `bottom`
          position: 'left', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        return redirect('/');
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: async () => {
      if (!localStorage.access_token) {
        Toastify({
          text: 'Please Login First',
          duration: 3000,
          destination: 'https://github.com/apvarun/toastify-js',
          newWindow: true,
          close: true,
          gravity: 'top', // `top` or `bottom`
          position: 'left', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        return redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '/',
        element: <Home url={url} />,
      },
      {
        path: '/my-coins',
        element: <MyCoins url={url} />,
      },
      {
        path: '/update-my-coin/:id',
        element: <UpdateCoin url={url} />,
      },
    ],
  },
]);

export default router;
