import { connectDb } from "./DbConnect"
import { User } from "./models"

export const fetchUser = async () => {
    try {
        connectDb();
        const users: UserI[] = await User.find()
        return users
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}