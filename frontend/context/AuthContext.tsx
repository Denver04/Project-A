import { RoleType } from "@/Enum/RoleType";
import React, { createContext, useContext, useState } from "react";

export interface AuthState {
  token: string | null;
  role: RoleType | null;
}

export interface AuthContextType {
  auth: AuthState;
  login: (data: { token: string; user: { role: RoleType } }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  auth: {
    token: null,
    role: null,
  },
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authInfo, setAuthInfo] = useState<AuthState>({
    token: null,
    role: RoleType.GUARD, // Default role for testing, change to null in production
  });

  const login = async (data: { token: string; user: { role: RoleType } }) => {
    setAuthInfo({
      token: data.token,
      role: data.user.role,
    });
  };

  const logout = () => {
    setAuthInfo({
      token: null,
      role: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth: authInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
