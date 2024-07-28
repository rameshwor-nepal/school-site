import Carousel from "../home/ui/Carousel"

const NewHomePage = () => {
    return (
        <section>
            <h1>
                New Home page
            </h1>
            <div
                className="h-[50rem]"
            >
                {/* <Image src={'/PLUMBING.jpg'} alt="image1" fill objectFit='cover' /> */}
                <Carousel />
            </div>
        </section>
    )
}

export default NewHomePage