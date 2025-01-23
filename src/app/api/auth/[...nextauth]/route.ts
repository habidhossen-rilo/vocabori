import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

// Export NextAuth handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
