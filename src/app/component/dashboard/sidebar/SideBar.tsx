
import React from 'react'
import styles from './sidebar.module.css'

import { menuItems } from '@/app/utils/MenuItems'
import MenuList from './menu/MenuList'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'
import { auth, signOut } from '@/auth'

const SideBar = async () => {
    //@ts-ignore
    const { user } = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src={user?.img || '/noavatar.png'} alt='user' width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>
                        {user?.username || ''}
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
            <form action={async () => {
                "use server"
                await signOut();
            }}>
                <div className={styles.logout}>
                    <MdLogout />
                    Logout
                </div>
            </form>
        </div>
    )
}

export default SideBar