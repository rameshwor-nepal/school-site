import { connectDb } from "@/app/utils/DbConnect";
import { NextResponse } from "next/server";
import { ProgramData } from "../models";

export const fetchSchoolProgram = async () => {
    try {
        connectDb();
        const data: FacilitiesI[] = await ProgramData.find()
        return NextResponse.json({
            message: "School program data found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}