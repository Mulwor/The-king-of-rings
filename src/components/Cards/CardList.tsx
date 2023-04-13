import React from 'react';
import { CharacterItem } from 'data/types';
import { createPortal } from 'react-dom';
import Modals from '../../components/Modal/Modals';

function CardList({ ...item }: CharacterItem) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="card">
        <div className="box">
          <div onClick={() => setShowModal(true)}>
            <h2>{item.name}</h2>
            <div>Gender: {item.gender}</div>
            <div>Race: {item.race}</div>
          </div>
          {showModal &&
            createPortal(<Modals onClose={() => setShowModal(false)} {...item} />, document.body)}
        </div>
      </div>
    </>
  );
}

export default CardList;
