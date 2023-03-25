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
  date: string;
  photo?: string;
};

export type TCardList = {
  key: number;
  name: string;
  calories: string;
  protein: string;
  fiber: string;
  blubber: string;
  portion: string;
  photo: string;
};

export type TFormListProps = {
  props?: string;
};

export type List = {
  formList: TFormList[];
};
