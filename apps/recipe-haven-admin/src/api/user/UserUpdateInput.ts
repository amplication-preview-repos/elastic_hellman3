import { RecipeUpdateManyWithoutUsersInput } from "./RecipeUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  recipes?: RecipeUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
  username?: string;
};
