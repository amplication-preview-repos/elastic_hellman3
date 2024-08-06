import { Recipe } from "../recipe/Recipe";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  recipes?: Array<Recipe>;
  updatedAt: Date;
};
