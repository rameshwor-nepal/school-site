import Card from '@/app/component/dashboard/card/Card'
import Chart from '@/app/component/dashboard/chart/Chart'
import Transaction from '@/app/component/dashboard/transactions/Transaction'
import React from 'react'
import styles from '@/app/component/dashboard/dashboard.module.css'
import RightBar from '@/app/component/dashboard/rightbar/RightBar'

const DashBoardPage = async () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transaction />
                <Chart />
            </div>
            <div className={styles.side}>
                <RightBar />
            </div>
        </div>
    )
}

export default DashBoardPage