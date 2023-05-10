import passport from "passport";
import bcrypt from "bcrypt";
import { prismaClient } from "./prismaClient";
import localStrategy from "passport-local";
import { User } from "@prisma/client";
const LocalStrategy = localStrategy.Strategy;

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (
      email: string,
      password: string,
      done: (
        error: any,
        user?: false | User | undefined,
        options?: localStrategy.IVerifyOptions | undefined
      ) => void
    ) => {
      const user = await prismaClient.user.findUnique({ where: { email } });
      if (!user) {
        return done(null, false, {
          message: "Incorrect information provided.",
        });
      }

      const validatePassword = await bcrypt.compare(password, user.password);
      if (!validatePassword) {
        return done(null, false, {
          message: "Incorrect information provided.",
        });
      }

      return done(null, user);
    }
  )
);

passport.serializeUser(
  (user: User, done: (error: any, id?: string | undefined) => void) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  async (id: string, done: (error: any, user?: User | null) => void) => {
    const user = await prismaClient.user.findUnique({ where: { id } });
    done(null, user);
  }
);
