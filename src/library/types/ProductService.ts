import { User } from './User';

export type ProductService = {
  title: string;
  description: string;
  image: string;
  startingPrice: number;
  endingPrice: number;
  user?: User;
};
