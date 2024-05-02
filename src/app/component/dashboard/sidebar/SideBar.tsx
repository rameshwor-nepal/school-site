"use client"
import React from 'react'
import styles from './sidebar.module.css'

import { menuItems } from '@/app/utils/MenuItems'
import MenuList from './menu/MenuList'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'
import { userLogout } from '@/app/feature/auth/authAction'
import { useRouter } from 'next/navigation'

const SideBar = ({ userData }: any) => {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await userLogout();
            router.push('/login')
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src={'/noavatar.png'} alt='user' width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>
                        {userData?.username || 'user name'}
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
                                <MenuList item={item} key={item.title} />
                            ))}
                        </li>
                    )
                }
                )}
            </ul>
            <form action=''>
                <div className={styles.logout} onClick={() => handleLogout()}>
                    <MdLogout />
                    Logout
                </div>
            </form>
        </div>
    )
}

export default SideBar