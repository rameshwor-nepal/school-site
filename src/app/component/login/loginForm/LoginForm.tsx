"use client"
import React from 'react'
import styles from './loginForm.module.css'
import { authenticate } from '@/app/feature/auth/authAction'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter()
    const [state, formAction] = useFormState(authenticate, undefined);

    if (state === "Success") {
        router.push('/dashboard')
    }

    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            <p>
                {typeof state === 'string' && state}
            </p>
        </form>
    )
}

export default LoginForm