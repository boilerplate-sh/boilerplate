import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const checkPassword = (password: string) => {
  const isMinSixChar = password.length >= 6;
  const hasOneUpperChar = /[A-Z]/.test(password);
  const hasOneLowerChar = /[a-z]/.test(password);
  const hasOneSpecialChar = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/.test(
    password
  );

  const isValid =
    isMinSixChar && hasOneLowerChar && hasOneUpperChar && hasOneSpecialChar;

  return {
    isMinSixChar,
    hasOneUpperChar,
    hasOneLowerChar,
    hasOneSpecialChar,
    isValid,
  };
};

export const isServer = typeof window === "undefined";
