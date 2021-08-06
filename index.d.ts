type Url = string;
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];


type TCharacter = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: string[];
};
type TInfo = {
  count: number;
  pages: number;
  next: ?string;
  prev: ?string;
};
type IField = {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  value: string;
  onChange: ({ target }: any) => void;
};