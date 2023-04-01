export type TFormList = {
  firstname: string;
  secondname: string;
  email: string;
  country: string;
  gender: string;
  birthday: string;
  photo: string;
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
