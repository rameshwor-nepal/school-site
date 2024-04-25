"use client"
import React from 'react'
import styles from './pagination.module.css'
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const Pagination = ({ count }: { count: number }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const page = searchParams.get('page') || '1';
    const params = new URLSearchParams(searchParams);
    const ITEMS_PER_PAGE = 5;

    const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

    const handleChangePage = (item: string) => {
        const nextPage = item === 'prev' ? parseInt(page) - 1 : parseInt(page) + 1;
        params.set("page", nextPage.toString());
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => handleChangePage("prev")}
            >
                Previous
            </button>
            <button
                className={styles.button}
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination