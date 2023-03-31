import React from 'react';
import './index.css';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import axios from 'axios';

const baseURL = 'https://the-one-api.dev/v2/character';
const TOKEN = 'u828DLVp0wqOia5kQTP8';

export function Home() {
  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log('Статус: ' + response.status, ' и данные, которые пришли', response.data.docs);
      });
  }, []);

  return (
    <div>
      <h2>Дом, милый дом!</h2>
      <Search />
      <Cards />
    </div>
  );
}
