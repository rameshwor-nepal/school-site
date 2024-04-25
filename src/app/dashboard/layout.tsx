import NavBar from '@/app/component/dashboard/navbar/NavBar'
import SideBar from '@/app/component/dashboard/sidebar/SideBar'
import React from 'react'
import styles from "@/app/component/dashboard/dashboard.module.css"

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideBar />
            </div>
            <div className={styles.content}>
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout