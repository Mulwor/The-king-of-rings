import React from 'react';
import './index.css';
import axios from 'axios';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import Preloader from '../../components/Preloading';

const baseURL = 'https://the-one-api.dev/v2/character';
const uniqueToken = 'u828DLVp0wqOia5kQTP8';

export function Home() {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  async function findCardByName(text: string) {
    setLoading(false);
    try {
      await axios
        .get(`${baseURL}?name=${text}`, {
          headers: {
            Authorization: `Bearer ${uniqueToken}`,
            Accept: 'application/json',
          },
        })
        .then((response) => {
          setCards(response.data.docs);
          // console.log('Статус: ' + response.status, 'ответ: ', response.data.docs);
          setLoading(true);
        });
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    async function allCards() {
      setLoading(false);
      try {
        await axios
          .get(`${baseURL}?limit=100`, {
            headers: {
              Authorization: `Bearer ${uniqueToken}`,
              Accept: 'application/json',
            },
          })
          .then((response) => {
            setCards(response.data.docs);
            setLoading(true);
          });
      } catch (error) {
        console.log(error);
      }
    }

    allCards();
  }, []);

  return (
    <div>
      <h2>Дом, милый дом!</h2>

      <Search findCard={findCardByName} />

      <h3>Фильтрация происходит по полной имени</h3>

      <Preloader loading={isLoading} />

      {/* Здесь надо понять как стейт передать по клику */}
      {cards.length > 0 ? (
        <Cards cards={cards} />
      ) : (
        <div>Возможно с сервером проблемы, подождите немного или посмотреите в консоль</div>
      )}
    </div>
  );
}
