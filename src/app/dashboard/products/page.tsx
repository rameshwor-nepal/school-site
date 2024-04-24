import React from 'react'
import styles from '@/component/product/product.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/component/ui/search/Search'
import Pagination from '@/component/ui/pagination/Pagination'

const ProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr key={1}>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    src={"/noproduct.jpg"}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.productImage}
                                />
                                {'New Arrival'}
                            </div>
                        </td>
                        <td>{'it is new product out here which is loved by almost every customers'}</td>
                        <td>$12</td>
                        <td>12/12/2222</td>
                        <td>Yes</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/products/${1}`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form action=''>
                                    <input type="hidden" name="id" value={1} />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination count={'1'} />
        </div>
    )
}

export default ProductPage