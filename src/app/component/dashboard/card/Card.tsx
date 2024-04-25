import React from 'react'
import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={30} />
            <div className={styles.texts}>
                <span className={styles.title}>
                    Total Users
                </span>
                <span className={styles.number}>
                    12.34
                </span>
                <span className={styles.detail}>
                    <span className={styles.positive}>12%</span> more than previous weeks
                </span>

            </div>
        </div>
    )
}

export default Card