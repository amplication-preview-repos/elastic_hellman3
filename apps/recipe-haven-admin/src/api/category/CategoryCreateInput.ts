import { RecipeCreateNestedManyWithoutCategoriesInput } from "./RecipeCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  recipes?: RecipeCreateNestedManyWithoutCategoriesInput;
};
