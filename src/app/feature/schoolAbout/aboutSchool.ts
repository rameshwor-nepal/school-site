import { connectDb } from "@/app/utils/DbConnect"
import { NextResponse } from "next/server";
import { AboutPageFeatures, CertificateImages, FAQData, SchoolHistory } from "../models";


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
export const fetchSchoolCertificate = async () => {
    try {
        connectDb();
        const data: CertificateI[] = await CertificateImages.find()
        return NextResponse.json({
            message: "School certificate are found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const fetchSchoolFeatures = async () => {
    try {
        connectDb();
        const data: CertificateI[] = await AboutPageFeatures.find()
        return NextResponse.json({
            message: "School features are found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export const fetchFAQData = async () => {
    try {
        connectDb();
        const data: FAQI[] = await FAQData.find()
        return NextResponse.json({
            message: "FAQs are found",
            data: data,
        }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}