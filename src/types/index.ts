export type Unique = {
  [index: string]: string | number;
};

export type State = {
  [index: string]: string | number;
};

export type TFormList = {
  firstName?: string;
  secondName?: string;
  email?: string;
  country?: string;
  gender?: string;
  date?: string;
  photo?: string;
  index?: string;
};

export type TFormListProps = {
  props?: string;
};

export type List = {
  formList: TFormList[];
};
