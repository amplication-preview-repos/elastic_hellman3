import { RecipeCreateNestedManyWithoutUsersInput } from "./RecipeCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  recipes?: RecipeCreateNestedManyWithoutUsersInput;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
  username: string;
};
