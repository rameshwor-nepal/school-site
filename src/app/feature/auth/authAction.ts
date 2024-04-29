"use server"

import { connectDb } from "@/app/utils/DbConnect";
import { User } from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export const authenticate = async (
    prevState: NextResponse<{ message: string; success: boolean; }> | string | undefined,
    formData: FormData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        connectDb();
        const user: UserI | null = await User.findOne({ username });
        if (!user) throw new Error("No username exists");

        const isPasswordCorrect = await bcrypt.compare(
            password as string,
            user.password
        );
        if (!isPasswordCorrect) throw new Error("Wrong Password!");

        const serializedUser = JSON.parse(JSON.stringify(user));

        const tokenData = {
            id: serializedUser._id.toString(),
            username: serializedUser.username,
            email: serializedUser.email
        };
        const token = await jwt.sign({ ...tokenData }, process.env.TOKEN_SECRET!, { expiresIn: '1d' });
        cookies().set("token", token, {
            httpOnly: true,
        });
        return "Success"
    }
    catch (err: any) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
        }
        if (err.message.includes("Wrong Password!")) {
            return "Wrong password";
        }
        console.log(err)
        return "Something went wrong";
    }
}
