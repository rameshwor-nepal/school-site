import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src={'/astronaut.png'} alt='image' fill className={styles.bg} />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}> Available Now</span>
                    <h3 className={styles.title}>How to use this new dashboard?</h3>
                    <span className={styles.subtitle}>
                        Takes 4 minutes to learn
                    </span>
                    <p className={styles.desc}>
                        ipsa nemo aliquam voluptas voluptatem molestias.ipsa nemo
                        aliquam voluptas voluptatem molestias
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />    Watch
                    </button>

                </div>
            </div>

        </div>
    )
}

export default RightBar