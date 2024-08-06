import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewUpdateManyWithoutRecipesInput } from "./ReviewUpdateManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  ingredients?: string | null;
  reviews?: ReviewUpdateManyWithoutRecipesInput;
  steps?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
