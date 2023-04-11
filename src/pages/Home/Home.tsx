import React from 'react';
import './index.css';
import axios from 'axios';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import Preloader from '../../components/Preloading';
import { useAppSelector } from '../../hooks/useRedux';
import { useDispatch } from 'react-redux';
import { setSearchResult } from '../../store/slices/searchResultSlice';

const baseURL = 'https://the-one-api.dev/v2/character';
const uniqueToken = 'u828DLVp0wqOia5kQTP8';

export function Home() {
  const results = useAppSelector((state) => state.searchText.results);
  const searchValue = useAppSelector((state) => state.searchText.searchValue);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function allCards() {
      setLoading(false);
      try {
        await axios
          .get(`${baseURL}`, {
            params: {
              limit: 100,
              name: searchValue,
            },
            headers: {
              Authorization: `Bearer ${uniqueToken}`,
              Accept: 'application/json',
            },
          })
          .then((response) => {
            dispatch(setSearchResult(response.data.docs));
            setLoading(true);
          });
      } catch (error) {
        console.log(error);
      }
    }
    allCards();
  }, [dispatch, searchValue]);

  return (
    <div>
      <h2>Дом, милый дом!</h2>
      <Search />
      <h3>Фильтрация происходит по полному имени</h3>
      <Preloader loading={isLoading} />
      {results.length > 0 ? (
        <Cards cards={results} />
      ) : (
        <div>Возможно с сервером проблемы, подождите немного или посмотреите в консоль</div>
      )}
    </div>
  );
}
