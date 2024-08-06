import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  bio?: string | null;
  user?: UserWhereUniqueInput | null;
};
