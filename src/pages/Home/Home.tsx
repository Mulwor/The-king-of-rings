import React from 'react';
import './index.css';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import axios from 'axios';
import { CharacterType } from 'data/types';

const baseURL = 'https://the-one-api.dev/v2/character?limit=200';
const TOKEN = 'u828DLVp0wqOia5kQTP8';

export function Home() {
  const [cards, setCards] = React.useState([]);

  async function allCards() {
    try {
      const response = await axios
        .get(baseURL, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: 'application/json',
          },
        })
        .then((response) => {
          console.log(
            'Статус: ' + response.status,
            ' и данные, которые пришли',
            response.data.docs
          );
          setCards(response.data.docs);
        });
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
      <Search />
      <>{cards.length !== 0 ? <Cards cards={cards} /> : <div>Карточки не обнаружились</div>}</>
    </div>
  );
}
