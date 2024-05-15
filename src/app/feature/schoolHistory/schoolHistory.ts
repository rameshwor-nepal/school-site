import { connectDb } from "@/app/utils/DbConnect"
import { NextResponse } from "next/server";
import { SchoolHistory } from "../models";


export const fetchSchoolHistory = async () => {
    try {
        connectDb();
        const data: SchoolHistoryI[] = await SchoolHistory.find()
        return NextResponse.json({
            message: "School History data found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}