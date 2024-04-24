import styles from '@/component/product/singleProduct/singleProduct.module.css';
import Image from "next/image";

const SingleProductPage = async ({ params }: any) => {
    const { id } = params;
    //   const product = await fetchProduct(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                {/* {product.title} */} Title
            </div>
            <div className={styles.formContainer}>
                <form action='' className={styles.form}>
                    <input type="hidden" name="id" value={1} />
                    <label>Title</label>
                    <input type="text" name="title" placeholder={'hello'} />
                    <label>Price</label>
                    <input type="number" name="price" placeholder={'100'} />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder={'yes'} />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder={"color"}
                    />
                    <label>Size</label>
                    <textarea
                        name="size"
                        placeholder={"size"}
                    />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={10}
                        placeholder={' hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello'}
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;