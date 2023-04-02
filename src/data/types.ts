export type FormItem = {
  firstname: string;
  secondname: string;
  email: string;
  country: string;
  gender: string;
  birthday: string;
  photo: string;
};

export interface FormValues extends Omit<FormItem, 'photo'> {
  photo: FileList;
}

export type TCharacter = {
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

export type TCharactersList = {
  cards: TCharacter[];
};

export type TLoading = {
  loading: boolean;
};
