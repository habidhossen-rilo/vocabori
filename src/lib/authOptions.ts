import { dbConnect } from "@/database/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "../features/users/schemas/user.schema";
import bcrypt from "bcryptjs";
// auth configuration
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log(credentials, "Credentials");
        try {
          if (!email || !password) {
            throw new Error("Email and password required");
          }
          // Connect to the database
          await dbConnect();

          // Find the user by email
          const user = await Users.findOne({ email });
          if (!user) {
            return null;
          }

          // Compare the entered password with the hashed password in the database
          const isMatch = await bcrypt.compare(password, user.password);
          console.log(isMatch, "isMatch");
          if (!isMatch) {
            return null;
          }

          console.log("Login successful");
          console.log(user, "User");
          return user;
        } catch (error) {
          console.error("Error during login", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token.accessToken = user.accessToken;
        token._id = user._id;
        token.email = user.email;
        token.role = user.role;
        token.name = user.name;
        token.photo = user.photo;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // session.accessToken = token.accessToken;
        session.user._id = token._id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.photo = token.photo;
      }
      return session;
    },
  },
};
