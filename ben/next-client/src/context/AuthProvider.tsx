"use client";

import { useFindUser } from "@/api/fetchData/auth/useFindUser";
import { User } from "@/types/user";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();
  const [token, setToken] = useState<string | null>(null); // Add a token state.

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  const { data } = useFindUser();

  useEffect(() => {
    if (!data?.data) return undefined;
    setUser(data?.data.user);
  }, [data?.data]);

  const authContextValue: AuthContextType = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
