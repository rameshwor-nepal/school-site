import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
},
    { timestamps: true },
);


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    img: {
        type: String,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },

},
    { timestamps: true },
)

const schoolHistorySchema = new mongoose.Schema({
    history: {
        type: String,
    },
    mission: {
        type: String,
    },
    vision: {
        type: String,
    },
    objective: {
        type: String,
    },
    principalMessage: {
        type: String,
    }
})

const certificateImageSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String
    }

})
const aboutPageFeatureSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String
    }

})
const faqSchema = new mongoose.Schema({
    question: {
        type: String,
    },
    answer: {
        type: String
    }

})

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
export const SchoolHistory = mongoose.models.SchoolHistory || mongoose.model("SchoolHistory", schoolHistorySchema)
export const CertificateImages = mongoose.models.CertificateImages || mongoose.model("CertificateImages", certificateImageSchema)
export const AboutPageFeatures = mongoose.models.AboutPageFeatures || mongoose.model("AboutPageFeatures", aboutPageFeatureSchema)
export const FAQData = mongoose.models.FAQData || mongoose.model("FAQData", faqSchema)