import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id: string;
    email: string;
    name: string;
    role: string;
    photo?: string;
  }
  interface Session {
    user: {
      _id: string;
      email: string;
      name: string;
      role: string;
      photo?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id: string;
    email: string;
    name: string;
    role: string;
    photo?: string;
  }
}
