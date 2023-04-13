export interface FormItem {
  id: string;
  firstname: string;
  secondname: string;
  email: string;
  country: string;
  gender: string;
  birthday: string;
  photo: string;
}

export interface FormValues extends Omit<FormItem, 'photo' | 'id'> {
  photo: FileList;
}

export interface CharacterItem {
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
}

export interface CharactersListProps {
  cards: CharacterItem[];
}

export interface TLoading {
  loading: boolean;
}
