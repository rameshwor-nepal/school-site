interface UserI {
    id: string;
    username: string;
    email: string;
    password: string;
    img: string;
    isAdmin: boolean;
    isActive: boolean;
    phone: string | number;
    address: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface ProductI {
    id?: string
    title: string;
    desc: string;
    price: number;
    stock: number;
    color: string;
    size: string;
    img: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface SchoolHistoryI {
    id?: string;
    history: string;
    mission: string;
    vision: string;
    objective: string;
    principalMessage: string;
}

interface CertificateI {
    id?: string;
    image: string;
    title: string;
}

interface FAQI {
    id?: string;
    question: string;
    answer: string;
}