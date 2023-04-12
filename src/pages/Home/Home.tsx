import React from 'react';
import './index.css';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards/Card';
import { useAppSelector } from '../../hooks/useRedux';
import { useGetCardQuery } from '../../store/slices/apiSlice';

export function Home() {
  const searchValue = useAppSelector((state) => state.searchText.searchValue);

  const { data, isLoading } = useGetCardQuery(searchValue);

  return (
    <div>
      <h2>Дом, милый дом!</h2>
      <Search />
      <h3>Фильтрация происходит по полному имени</h3>
      {!isLoading ? <Cards results={data ? data.docs : undefined} /> : 'Загрузка'}
    </div>
  );
}
