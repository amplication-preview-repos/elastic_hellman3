import { RecipeUpdateManyWithoutCategoriesInput } from "./RecipeUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  recipes?: RecipeUpdateManyWithoutCategoriesInput;
};
