import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewCreateNestedManyWithoutRecipesInput } from "./ReviewCreateNestedManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  ingredients?: string | null;
  reviews?: ReviewCreateNestedManyWithoutRecipesInput;
  steps?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
