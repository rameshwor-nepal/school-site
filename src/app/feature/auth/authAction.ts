"use server"
import { signIn } from "@/auth";

export const authenticate = async (prevState: string | undefined, formData: FormData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username, password })
        console.log("success")
    }
    catch (err: any) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
        }
        console.log(err)
        return "Something went wrong";
    }
}
