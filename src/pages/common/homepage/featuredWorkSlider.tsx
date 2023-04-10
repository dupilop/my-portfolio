import Image from 'next/image';
import styles from './styles/featuredWorkSlider.module.scss';

interface WorkSlider{
    title: string,
    createYear: string,
    category: string,
    description: string,
    image: string
}

const FeaturedWorkSlider: React.FC<WorkSlider> = ({title, createYear, category, description, image}) => {

    return (
        <>
            <div className={styles.featuredWorkSliderContainer}>
                <div className={styles.featuredImage}>
                <Image
                    alt="my picture"
                    className={styles.imagePic}
                    src={image}
                    objectFit="contain"
                    layout="fill"
                    priority
                    />
                </div>
                <div className={styles.content}>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <span>{createYear} {category}</span>
                    </div>
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FeaturedWorkSlider;