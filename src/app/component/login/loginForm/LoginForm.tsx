"use client"
import React, { useState } from 'react'
import styles from './loginForm.module.css'
import { authenticate } from '@/app/feature/auth/authAction'
import { useFormState } from 'react-dom'

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined)

    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            <p>
                {state && state}
            </p>
        </form>
    )
}

export default LoginForm