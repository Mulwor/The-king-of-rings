import React from 'react';
import loupe from '../../assets/loupe-svgrepo-com.svg';

export type SearchT = {
  findCard: (text: string) => void;
};

export function Search(data: SearchT) {
  const [search, setSearch] = React.useState('');

  function onHandleClick(event: React.FormEvent) {
    event.preventDefault();
    data.findCard(search);
  }

  const checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    localStorage.setItem('Search', event.target.value);
  };

  React.useEffect(() => {
    if (localStorage.getItem('Search')) {
      setSearch(localStorage.getItem('Search') as string);
    }
  }, []);

  return (
    <form className="input" onSubmit={(e) => onHandleClick(e)}>
      <img className="loops" src={loupe} />
      <input
        value={search}
        onChange={checkValue}
        className="search"
        type="search"
        placeholder="Search ..."
      />
      <button type="submit">Find card</button>
    </form>
  );
}
