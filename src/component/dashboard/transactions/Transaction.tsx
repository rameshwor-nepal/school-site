import React from 'react'
import styles from './transaction.module.css'
import Image from 'next/image'

const Transaction = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src={'/noavatar.png'} alt='image' width={30} height={30}
                                    className={styles.userImage} />
                                Amirh Dilla
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td> 14/04/024</td>
                        <td> $12.300 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transaction