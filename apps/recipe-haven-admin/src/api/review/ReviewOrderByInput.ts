import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
