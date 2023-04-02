import React from 'react';
import { CharacterItem } from 'data/types';
import { createPortal } from 'react-dom';
import Modals from '../../components/Modal/Modals';

function CardList(props: CharacterItem) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="card">
        <div className="box">
          <div onClick={() => setShowModal(true)}>
            <h2>{props.name}</h2>
            <div>Gender: {props.gender}</div>
            <div>Race: {props.race}</div>
          </div>
          {showModal &&
            createPortal(
              <Modals
                onClose={() => setShowModal(false)}
                name={props.name}
                wikiUrl={props.wikiUrl}
                spouse={props.spouse}
                realm={props.realm}
                height={props.height}
                race={props.race}
                gender={props.gender}
                birth={props.birth}
                death={props.death}
                hair={props.hair}
              />,
              document.body
            )}
        </div>
      </div>
    </>
  );
}

export default CardList;
