import { User } from "../user/User";

export type UserProfile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
