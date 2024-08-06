import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  recipes?: RecipeListRelationFilter;
};
