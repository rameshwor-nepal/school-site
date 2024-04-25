import React from 'react'
import styles from '@/app/component/login/login.module.css'
import LoginForm from '@/app/component/login/loginForm/LoginForm'

const LogInPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default LogInPage