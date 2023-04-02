import React from 'react';

export interface CharacterItem {
  onClose: () => void;
  wikiUrl: string;
  spouse: string;
  realm: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  death: string;
  hair: string;
  name: string;
}

function Modals(item: CharacterItem) {
  return (
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
  );
}

export default Modals;
