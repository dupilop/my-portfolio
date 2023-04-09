import Image from 'next/image';
import styles from './styles/featuredWorkSlider.module.scss';

const FeaturedWorkSlider = () => {
    const profile = '/my_pic.jpg';

    return (
        <>
            <div className={styles.container}>
                <div className={styles.featuredImage}>
                <Image
                    alt="my picture"
                    className={styles.imagePic}
                    src={profile}
                    width={100}
                    height={100}
                    // priority
                    />
                </div>
                <div className={styles.content}>
                    <div>
                        <h3>Designing Dashboards</h3>
                    </div>
                    <div>
                        <span>2020 Dashboard</span>
                    </div>
                    <div>
                        <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FeaturedWorkSlider;