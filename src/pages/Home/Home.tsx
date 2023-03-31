import React from 'react';
import './index.css';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import axios from 'axios';

const baseURL = 'https://the-one-api.dev/v2';
const uniqueToken = 'u828DLVp0wqOia5kQTP8';

export function Home() {
  const [cards, setCards] = React.useState([]);

  async function findCard(text: string) {
    const findCardUser = text.toLowerCase();

    try {
      await axios
        .get(`${baseURL}/character?race=${findCardUser}?limit=100`, {
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

  async function allCards() {
    try {
      await axios
        .get(`${baseURL}/character?limit=200`, {
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

      <Search findCard={findCard} />
      {cards.length !== 0 ? <Cards cards={cards} /> : <div>Карточка не найдена</div>}
    </div>
  );
}
