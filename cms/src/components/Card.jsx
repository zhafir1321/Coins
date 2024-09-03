import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Toastify from 'toastify-js';

export default function Card({ coins, url }) {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/usercoins/${coins.id}`,
        coins.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        },
      );
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
    }
  }
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl m-4">
        <figure>
          <img src={coins.logo} alt={coins.name} />
        </figure>
        <div className="card-body">
          <h4 className="card-title">{coins.symbol}</h4>
          <h2 className="card-title">{coins.name}</h2>

          <p>{coins.description}</p>
          <div className="card-actions justify-end">
            <form onClick={handleSubmit}>
              <button className="btn btn-primary">
                <Link to={'/my-coins'}>Add</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
