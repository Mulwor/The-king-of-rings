import React from 'react';
import './index.css';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import axios from 'axios';

const baseURL = 'https://the-one-api.dev/v2/character';
const uniqueToken = 'u828DLVp0wqOia5kQTP8';

export function Home() {
  const [cards, setCards] = React.useState([]);

  async function findCardByName(text: string) {
    try {
      await axios
        .get(`${baseURL}?name=${text}`, {
          headers: {
            Authorization: `Bearer ${uniqueToken}`,
            Accept: 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          setCards(response.data.docs);
          console.log(
            'Статус: ' + response.status,
            ' и данные, которые пришли',
            response.data.docs
          );
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function allCards() {
    try {
      await axios
        .get(`${baseURL}?limit=100`, {
          headers: {
            Authorization: `Bearer ${uniqueToken}`,
            Accept: 'application/json',
          },
        })
        .then((response) => setCards(response.data.docs));
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    allCards();
  }, []);

  return (
    <div>
      <h2>Дом, милый дом!</h2>

      <Search findCard={findCardByName} />

      <h3>Фильтрация происходит по полной имени</h3>

      {cards.length !== 0 ? (
        <Cards cards={cards} />
      ) : (
        <div>Возможно с сервером проблемы, подождите немного</div>
      )}
    </div>
  );
}
