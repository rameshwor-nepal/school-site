import NavBar from '@/app/component/dashboard/navbar/NavBar'
import SideBar from '@/app/component/dashboard/sidebar/SideBar'
import React from 'react'
import styles from "@/app/component/dashboard/dashboard.module.css"
import { getUserData } from '../feature/auth/authAction'

const DashboardLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {
    const user = await getUserData();
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideBar userData={{ username: user.username }} />
            </div>
            <div className={styles.content}>
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout