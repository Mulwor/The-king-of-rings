import React from 'react';
import { TFormList } from 'data/types';

export type createdCardT = {
  createdCard: (data: TFormList) => void;
};

export function Form(props: createdCardT) {
  return (
    <>
      <div>
        <h2>Форма</h2>

        <div>Заполните данную форму, чтобы увидеть свою карточку</div>

        <form className="form">
          <div className="item">
            <label className="labels">
              Firstname:
              <input type="text" id="name" className="text firstname" required />
            </label>
          </div>

          <div className="item">
            <label className="labels">
              Secondname:
              <input type="text" id="surname" className="text secondname" required />
            </label>
          </div>

          <div className="item">
            <label className="labels">
              Email:
              <input type="email" name="email" id="email" className="text email" />
            </label>
          </div>

          <div>
            <label className="country">
              Where are you from:
              <select className="choose" required>
                <option value="Denmark">Denmark</option>
                <option value="Russia">Russia</option>
                <option value="England">England</option>
                <option value="Wales">Wales </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Belarus">Belarus</option>
                <option value="Germany">Germany</option>
                <option value="Belgium">Belgium</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Albania">Albania</option>
                <option value="Portugal">Portugal</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Greece">Greece</option>
                <option value="Serbia">Serbia</option>
              </select>
            </label>
          </div>

          <label>
            Your gender:
            <select className="gender" required>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="It">It</option>
            </select>
          </label>
          <div className="form-item">
            <label>
              Your birthday in:
              <input type="date" className="data" required />
            </label>
          </div>

          <div className="form-item">
            <label className="form-photo">
              Photo:
              <input type="file" className="photo" required />
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              className="circle"
              required
            />
            <label>Ваши данные будут использованы в умышленных целях и будут переданы в ФБР</label>
          </div>

          <button className="button">Создать карточку</button>
        </form>
      </div>
    </>
  );
}
