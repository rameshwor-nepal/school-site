import { connectDb } from "@/utils/DbConnect";
import { User } from "../models";


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