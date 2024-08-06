import { Category } from "../category/Category";
import { Review } from "../review/Review";
import { User } from "../user/User";

export type Recipe = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  ingredients: string | null;
  reviews?: Array<Review>;
  steps: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
