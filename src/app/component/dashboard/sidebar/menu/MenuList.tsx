"use client"
import Link from 'next/link'
import React from 'react'
import styles from './menuList.module.css'
import { usePathname } from 'next/navigation';

interface PropsI {
    item: {
        path: string;
        title: string;
    }
}

const MenuList = ({ item }: PropsI) => {
    const pathname = usePathname()
    // const Icon = item.icon;
    return (
        <div>
            <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
                {/* <Icon /> */}
                {item.title}
            </Link>
        </div>
    )
}

export default MenuList