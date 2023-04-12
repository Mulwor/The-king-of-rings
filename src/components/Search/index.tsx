import React from 'react';
import loupe from '../../assets/loupe-svgrepo-com.svg';
import { useAppSelector } from '../../hooks/useRedux';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/searchSlice';

export function Search() {
  const search = useAppSelector((state) => state.searchText.searchValue);
  const dispatch = useDispatch();

  const checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
    localStorage.setItem('Search', event.target.value);
  };

  function onHandleClick(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form className="input" onSubmit={(event) => onHandleClick(event)}>
      <img className="loops" src={loupe} />
      <input
        value={search}
        onChange={checkValue}
        className="search"
        type="search"
        placeholder="Search ..."
      />
    </form>
  );
}
