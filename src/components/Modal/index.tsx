import React from 'react';
import { TCharacter } from 'data/types';

type ProductModalProps = {
  profile: TCharacter;
  closeModal: () => void;
};

function ModalWindow({ profile, closeModal }: ProductModalProps) {
  const { wikiUrl, spouse, realm, height, race, gender, birth, death, hair, name } = profile;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleModalCloseClick = () => {
    closeModal();
  };

  return (
    <div className="Sandbox" onClick={handleOverlayClick}>
      <div className="value">
        <button onClick={handleModalCloseClick}>X</button>
        <div className="information"> {wikiUrl} </div>
      </div>
    </div>
  );
}

export default ModalWindow;
