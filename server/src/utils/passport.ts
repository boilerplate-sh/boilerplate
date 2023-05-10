import passport from "passport";
import { prismaClient } from "./prismaClient";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  VerifiedCallback,
} from "passport-jwt";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
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
