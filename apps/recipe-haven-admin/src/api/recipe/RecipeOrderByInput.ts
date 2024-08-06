import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  steps?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
