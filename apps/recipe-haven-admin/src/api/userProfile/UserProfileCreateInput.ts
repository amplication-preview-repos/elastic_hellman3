import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  bio?: string | null;
  user?: UserWhereUniqueInput | null;
};