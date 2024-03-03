import Image from 'next/image';
import styles from './styles/featuredWorkSlider.module.scss';
import { FaExternalLinkAlt } from "react-icons/fa";

interface WorkSlider{
    title: string,
    createYear: string,
    category: string,
    description: string,
    image: string,
    outerLink: string
}

const FeaturedWorkSlider: React.FC<WorkSlider> = ({title, createYear, category, description, image, outerLink}) => {

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
                        <span>{createYear} </span> <h6>{category}</h6>
                    </div>
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div className={styles.externalLink}>
                    <a href={outerLink} target="_blank"  rel="noreferrer"><FaExternalLinkAlt /></a>
                </div>
            </div>
        </>
    )
}

export default FeaturedWorkSlider;