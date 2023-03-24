import React from 'react';
import './index.css';
import { Search } from '../../components/Search';
import { Cards } from '../../components/Cards';

export function Home() {
  return (
    <div>
      <h2>Дом, милый дом!</h2>
      <Search />
      <Cards />
    </div>
  );
}
