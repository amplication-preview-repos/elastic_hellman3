import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  recipes?: RecipeListRelationFilter;
  reviews?: ReviewListRelationFilter;
  userProfiles?: UserProfileListRelationFilter;
  username?: StringFilter;
};
