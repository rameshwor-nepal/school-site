import { connectDb } from "@/utils/DbConnect"
import { Product } from "../models"


export const fetchAllProducts = async (q: string, page: number) => {
    const regex = new RegExp(q, 'i')
    const itemPerPage = 5;
    try {
        connectDb()
        //@ts-ignore
        const count = await Product.find({ username: { $regex: regex } }).count();
        const products: ProductI[] = await Product.find({ username: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1))
        return { count, products }
    }
    catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchSingleProduct = async (id: string) => {
    try {
        connectDb();
        const product: ProductI | null = await Product.findById(id)
        return product

    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}