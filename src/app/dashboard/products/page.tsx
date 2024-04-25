import React from 'react'
import styles from '@/app/component/product/product.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/component/ui/search/Search'
import Pagination from '@/app/component/ui/pagination/Pagination'
import { deleteProduct, fetchAllProducts } from '@/app/feature/product/productData'

const ProductPage = async ({ searchParams }: any) => {
    const q = searchParams?.q || '';
    const page = searchParams?.page || 1;

    const { count, products } = await fetchAllProducts(q, page);
    // console.log(products)

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
                    {
                        // products?.length > 0 ? (
                        products.map((el) => (
                            <tr key={el.id}>
                                <td>
                                    <div className={styles.product}>
                                        <Image
                                            src={el?.img || "/noproduct.jpg"}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className={styles.productImage}
                                        />
                                        {el.title}
                                    </div>
                                </td>
                                <td>{el.desc}</td>
                                <td>{el.price}</td>
                                <td>{el?.createdAt?.toString().slice(4, 16) || '-'}</td>
                                <td>{el.stock}</td>
                                <td>
                                    <div className={styles.buttons}>
                                        <Link href={`/dashboard/products/${el.id}`}>
                                            <button className={`${styles.button} ${styles.view}`}>
                                                View
                                            </button>
                                        </Link>
                                        <form action={deleteProduct}>
                                            <input type="hidden" name="id" value={el.id} />
                                            <button className={`${styles.button} ${styles.delete}`}>
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        )
                        )
                        // ) : (
                        //     <div className={styles.norecord}>No record Found</div>
                        // )
                    }

                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default ProductPage