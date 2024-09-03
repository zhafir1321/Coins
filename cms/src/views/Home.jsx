import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

export default function Home({ url }) {
  const [coins, setCoins] = useState([]);

  async function getCoins() {
    try {
      const { data } = await axios.get(`${url}/coins`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCoins(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <>
      <div className="m-5 grid grid-cols-3">
        {coins.map((el) => (
          <Card key={el.id} coins={el} url={url} />
        ))}
      </div>
    </>
  );
}
