"use client"
import React from 'react'
import styles from './sidebar.module.css'

import { menuItems } from '@/utils/MenuItems'
import MenuList from './menu/MenuList'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdLogout } from 'react-icons/md'

const SideBar = () => {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src={'/noavatar.png'} alt='user' width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>
                        Mr.Adhil Adil
                    </span>
                    <span className={styles.userTitle}>
                        Administrator
                    </span>
                </div>
            </div>
            <ul>
                {menuItems?.map((el) => {
                    return (
                        <li key={el.title} className={styles.list}>
                            <span className={styles.cat}>
                                {el.title}
                            </span>
                            {el?.list.map((item) => (
                                <MenuList item={item} isActive={pathname === item.path} key={item.title} />
                            ))}
                        </li>
                    )
                }
                )}
            </ul>
            <div className={styles.logout}>
                <MdLogout /> Logout
            </div>
        </div>
    )
}

export default SideBar