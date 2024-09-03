import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyCoins({ url }) {
  const [myCoins, setMyCoins] = useState([]);

  async function getMyCoins() {
    try {
      const { data } = await axios.get(`${url}/usercoins`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setMyCoins(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(e, id) {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`${url}/usercoins/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      getMyCoins();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMyCoins();
  }, []);

  return (
    <>
      <div className="m-5 grid grid-cols-3">
        {myCoins.map((el) => (
          <div key={el.id} className="">
            <div className="card bg-base-100 w-96 shadow-xl m-4">
              <figure>
                <img src={el.Coin.logo} alt={el.Coin.name} />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{el.Coin.symbol}</h4>
                <h2 className="card-title">{el.Coin.name}</h2>

                <p>{el.quantity}</p>
                <div className="card-actions justify-end">
                  <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    <Link to={`/update-my-coin/${el.id}`}>Update</Link>
                  </button>
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={(e) => handleDelete(e, el.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
