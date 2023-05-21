import { User } from "@prisma/client";
import { Request } from "express";
import { File } from "multer";

declare module "express" {
  export interface Request {
    user?: Partial<User>;
    files?: File[] | { [fieldname: string]: File[] } | undefined;
  }
}
