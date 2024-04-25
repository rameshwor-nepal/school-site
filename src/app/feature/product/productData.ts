import { connectDb } from "@/app/utils/DbConnect"
import { Product } from "../models"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const fetchAllProducts = async (q: string, page: number) => {
    const regex = new RegExp(q, 'i')
    const itemPerPage = 5;
    try {
        connectDb()
        //@ts-ignore
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products: ProductI[] = await Product.find({ title: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1))
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

export const addProduct = async (formData: FormData) => {
    "use server"
    const { title, desc, size, price, stock, color, img }
        = Object.fromEntries(formData)

    try {
        connectDb();
        const newProduct = new Product({
            title,
            desc,
            size,
            price,
            stock,
            color,
            img,
        })
        await newProduct.save();
    }
    catch (error: any) {
        console.log(error)
        throw new Error("Failed to add new product")
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const updateProduct = async (formData: FormData) => {
    "use server"
    const { id, title, desc, size, price, stock, color, img }
        = Object.fromEntries(formData)

    try {
        connectDb();
        const updateFields = {
            title,
            desc,
            size,
            price,
            stock,
            color,
            img,
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key as keyof typeof updateFields] === '' || undefined) && delete updateFields[key as keyof typeof updateFields]);
        await Product.findByIdAndUpdate(id, updateFields)
    }
    catch (error: any) {
        console.log(error)
        throw new Error("Failed to update product")
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}

export const deleteProduct = async (formData: FormData) => {
    "use server"
    const { id } = Object.fromEntries(formData)
    try {
        connectDb();
        await Product.findByIdAndDelete(id)
    }
    catch (error: any) {
        console.log(error)
        throw new Error("Failed to delete product")
    }
    revalidatePath('/dashboard/products')
}