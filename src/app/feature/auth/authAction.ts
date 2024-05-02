"use server"

import { connectDb } from "@/app/utils/DbConnect";
import { User } from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

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
        return err.message;
    }
}

export const getDataFromToken = () => {
    try {
        const token = cookies().get("token")?.value || '';
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken?.id
    }
    catch (err: any) {
        throw new Error(err.message);
    }
}

export const getUserData = async () => {
    try {
        connectDb();
        const userId = await getDataFromToken();
        const user = await User.findOne({ _id: userId }).select("-password")
        return user
    }
    catch (err: any) {
        console.log(err)
    }
}

export const userLogout = async () => {
    try {
        cookies().set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        return "Logout successful";
    }
    catch (error) {

    }
}