import React, { FormEvent } from 'react';
import { TFormList } from 'types';

export type createdCardT = {
  createdCard: (data: TFormList) => void;
};

export class Form extends React.Component<createdCardT> {
  firstname: React.RefObject<HTMLInputElement>;
  secondname: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  gender: React.RefObject<HTMLSelectElement>;
  date: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
  agree: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;

  constructor(props: createdCardT) {
    super(props);
    this.firstname = React.createRef();
    this.secondname = React.createRef();
    this.email = React.createRef();
    this.country = React.createRef();
    this.gender = React.createRef();
    this.date = React.createRef();
    this.photo = React.createRef();
    this.agree = React.createRef();
    this.form = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cardObj = {
      firstname: this.firstname.current!.value,
      secondname: this.secondname.current!.value,
      email: this.email.current!.value,
      country: this.country.current!.value,
      gender: this.gender.current!.value,
      date: this.date.current!.value,
      photo: this.photo.current?.files?.length
        ? URL.createObjectURL(this.photo.current.files[0])
        : '',
    };
    this.form.current!.reset();
    this.props.createdCard(cardObj);
  }

  render() {
    return (
      <>
        <div>
          <h2>Форма</h2>

          <div>Заполните данную форму, чтобы увидеть свою карточку</div>

          <form className="form" onSubmit={(event) => this.handleSubmit(event)} ref={this.form}>
            <div className="item">
              <label className="labels">
                Firstname:
                <input
                  type="text"
                  id="name"
                  className="text firstname"
                  ref={this.firstname}
                  required
                />
              </label>
            </div>

            <div className="item">
              <label className="labels">
                Secondname:
                <input
                  type="text"
                  id="surname"
                  className="text secondname"
                  ref={this.secondname}
                  required
                />
              </label>
            </div>

            <div className="item">
              <label className="labels">
                Email:
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text email"
                  ref={this.email}
                />
              </label>
            </div>

            <div>
              <label className="country">
                Where are you from:
                <select className="choose" ref={this.country} required>
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
              <select className="gender" ref={this.gender} required>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="It">It</option>
              </select>
            </label>
            <div className="form-item">
              <label>
                Your birthday in:
                <input type="date" className="data" ref={this.date} required />
              </label>
            </div>

            <div className="form-item">
              <label className="form-photo">
                Photo:
                <input type="file" className="photo" ref={this.photo} required />
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
                className="circle"
                ref={this.agree}
                required
              />
              <label>
                Ваши данные будут использованы в умышленных целях и будут переданы в ФБР
              </label>
            </div>

            <button className="button">Создать карточку</button>
          </form>
        </div>
      </>
    );
  }
}
