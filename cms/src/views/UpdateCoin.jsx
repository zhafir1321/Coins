import { useEffect, useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import Toastify from 'toastify-js';

export default function UpdateCoin({ url }) {
  const [quantity, setQuantity] = useState('');
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const navigate = useNavigate();

  async function getCoin() {
    try {
      const { data } = await axios.get(`${url}/usercoins/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCoin(data.Coin);
    } catch (error) {
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
      navigate('/my-coins');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = { quantity: +quantity };

      const { data } = await axios.put(`${url}/usercoins/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      navigate('/my-coins');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <>
      <div className="mb-5">
        <div className="grid justify-center">
          <h1>Update My Coin</h1>
          <div>
            <img src={coin.logo} alt={coin.name} />
          </div>
          <div>
            <h2>{coin.symbol}</h2>
          </div>
          <div>
            <h2>{coin.name}</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update Quantity
          </button>
        </form>
      </div>
    </>
  );
}
