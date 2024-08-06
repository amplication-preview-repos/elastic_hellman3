import { Recipe } from "../recipe/Recipe";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  recipe?: Recipe | null;
  updatedAt: Date;
  user?: User | null;
};
