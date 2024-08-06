import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  ingredients?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  steps?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
