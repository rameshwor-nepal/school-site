
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';
import styles from './menuList.module.css'

interface PropsI {
    isActive: boolean;
    item: {
        path: string;
        icon: IconType;
        title: string;
    }
}

const MenuList = ({ item, isActive }: PropsI) => {
    const Icon = item.icon;
    return (
        <Link href={item.path} className={`${styles.container} ${isActive && styles.active}`}>
            {<Icon />}
            {item.title}

        </Link>
    )
}

export default MenuList