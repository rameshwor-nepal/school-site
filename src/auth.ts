import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { User } from "@/app/feature/models";
import { connectDb } from "@/app/utils/DbConnect";

const logIn = async (credentials: any) => {
    try {
        connectDb();
        const user = await User.findOne({ username: credentials.username })
        if (!user || !user.isAdmin) throw new Error("Wrong Credentials");
        return user
    }
    catch (error) {
        console.log(error)
        throw new Error("Failed to Login")

    }
};

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await logIn(credentials)
                    return user;
                } catch (error) {
                    return null;

                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.img = user.img;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.username = token.username;
                session.user.img = token.img;
            }
            return session;
        },
    },
})