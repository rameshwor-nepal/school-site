import { connectDb } from "@/app/utils/DbConnect";
import { NextResponse } from "next/server";
import { FacilitiesData } from "../models";

export const fetchSchoolFacilities = async () => {
    try {
        connectDb();
        const data: FacilitiesI[] = await FacilitiesData.find()
        return NextResponse.json({
            message: "School Facilities data found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}