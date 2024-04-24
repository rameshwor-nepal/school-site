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
    updatedAt?: string;
}

interface ProductI {
    title: string;
    desc: string;
    price: number;
    stock: number;
    color: string;
    size: string;
    img: string;
    createdAt?: string;
    updatedAt?: string;
}