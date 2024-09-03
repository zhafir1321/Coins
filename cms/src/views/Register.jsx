import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Toastify from 'toastify-js';

export default function Register({ url }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = { fullName, email, password };
      const { data } = await axios.post(`${url}/register`, body);
      Toastify({
        text: 'Register Successfully',
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
      navigate('/login');
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
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
    }
  }

  return (
    <>
      <div className="m-10">
        <div className="flex justify-center">
          <h1>HackCrypto</h1>
        </div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="fullName"
              id="fullName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
              placeholder="name@mail.com"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
          </div>
          <div className="flex items-start mb-5">
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Don't have an account yet? {'  '}
              <Link
                to={'/login'}
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </div>
    </>
  );
}
