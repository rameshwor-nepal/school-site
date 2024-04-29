import { connectDb } from "@/app/utils/DbConnect";
import { User } from "../models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const fetchUser = async (q: string, page: number) => {
    const regex = new RegExp(q, 'i')
    const itemPerPage = 5;

    try {
        connectDb();
        //@ts-ignore
        const count = await User.find({ username: { $regex: regex } }).count();
        const users: UserI[] = await User.find({ username: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1))
        return { count, users }
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}

export const fetchSingleUser = async (id: string) => {
    try {
        connectDb();
        const user: UserI | null = await User.findById(id)
        return user

    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}

export const addUser = async (formData: FormData) => {
    "use server"
    const { username, email, password, phone, address, isAdmin, isActive }
        = Object.fromEntries(formData)

    try {
        connectDb();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.toString(), salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });
        await newUser.save();
    }
    catch (error: any) {
        console.log(error)
        throw new Error("Failed to create new user")
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const updateUser = async (formData: FormData) => {
    "use server"
    const { id, username, email, password, phone, address, isAdmin, isActive }
        = Object.fromEntries(formData)

    try {
        connectDb();
        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key as keyof typeof updateFields] === '' || undefined) && delete updateFields[key as keyof typeof updateFields]);
        await User.findByIdAndUpdate(id, updateFields)

    }
    catch (error: any) {
        console.log(error)
        throw new Error("Failed to update user")
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const deleteUser = async (formData: FormData) => {
    "use server"
    const { id } = Object.fromEntries(formData)
    try {
        connectDb();
        await User.findByIdAndDelete(id)
    }
    catch (error: any) {
        console.log(error)
        throw new Error("Failed to delete user")
    }
    revalidatePath('/dashboard/users')
}