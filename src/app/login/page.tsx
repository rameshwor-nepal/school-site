import React from 'react'
import styles from '@/app/component/login/login.module.css'
import LoginForm from '@/app/component/login/loginForm/LoginForm'
// import { auth } from '@/auth'

const LogInPage = async () => {
    //@ts-ignore
    // const { user } = await auth();
    // console.log("user", user)
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default LogInPage