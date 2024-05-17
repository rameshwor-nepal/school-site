import { connectDb } from "@/app/utils/DbConnect";
import { NextResponse } from "next/server";
import { GalleryThumnailImages } from "../models";

export const fetchSchoolGalleryThumnail = async () => {
    try {
        connectDb();
        const data: GalleryI[] = await GalleryThumnailImages.find()
        return NextResponse.json({
            message: "School gallery data found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}