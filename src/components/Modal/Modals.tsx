import React from 'react';

export interface CharacterItem {
  onClose: () => void;
  name: string;
  gender: string;
  wikiUrl: string;
  race: string;
  birth: string;
  death: string;
}

function Modals(item: CharacterItem) {
  return (
    <div
      className="modalwrap"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          item.onClose();
        }
      }}
    >
      <div className="modal">
        <button className="buttonela" onClick={item.onClose}>
          X
        </button>
        <div>Name: {item.name}</div>
        <div>Gender: {item.gender}</div>
        <div>Race: {item.race}</div>
        <div>Birth: {item.birth}</div>
        <div>Depth: {item.death}</div>
        <div>Wikipedia: {item.wikiUrl}</div>
      </div>
    </div>
  );
}

export default Modals;
