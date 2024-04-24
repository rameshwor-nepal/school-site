import Card from '@/component/dashboard/card/Card'
import Chart from '@/component/dashboard/chart/Chart'
import Transaction from '@/component/dashboard/transactions/Transaction'
import React from 'react'
import styles from '@/component/dashboard/dashboard.module.css'
import RightBar from '@/component/dashboard/rightbar/RightBar'

const DashBoardPage = () => {

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