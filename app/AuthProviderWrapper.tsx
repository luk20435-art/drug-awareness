// app/AuthProviderWrapper.tsx
"use client"; // ต้องอยู่บรรทัดแรก

import React from "react";
import { AuthProvider } from "@/contexts/auth-context";

interface Props {
  children: React.ReactNode;
}

export const AuthProviderWrapper: React.FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
