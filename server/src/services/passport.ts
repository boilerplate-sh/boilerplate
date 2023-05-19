import { PassportStatic } from "passport";
import { prismaClient } from "./prismaClient";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  VerifiedCallback,
} from "passport-jwt";

export const setUpPassport = (passport: PassportStatic) => {
  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  passport.use(
    new JwtStrategy(
      opts,
      async (jwtPayload: { id: string }, done: VerifiedCallback) => {
        const user = await prismaClient.user.findUnique({
          where: { id: jwtPayload.id },
        });
        if (!user) {
          return done(null, false, {
            message: "Incorrect information provided.",
          });
        }

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    )
  );
};
