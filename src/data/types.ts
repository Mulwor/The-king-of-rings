export type Unique = {
  [index: string]: string | number;
};

export type State = {
  [index: string]: string | number;
};

export type TFormList = {
  firstname: string;
  secondname: string;
  email: string;
  country: string;
  gender: string;
  birthday: string;
  photo: string;
};

export type TCardList = {
  key: number;
  name: string;
  calories: string;
  protein: string;
  fiber: string;
  portion: string;
  photo: string;
};

export type TFormListProps = {
  props?: string;
};

export type List = {
  formList: TFormList[];
};

export type CharacterType = {
  _id: string;
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
};

export type CharactersListType = {
  cards: CharacterType[];
};

export type LoadingType = {
  loading: boolean;
};
