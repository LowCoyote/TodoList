import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "@/types/User.ts";

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
