import FeaturedWorkSlider from './featuredWorkSlider';
import styles from './styles/featuredWork.module.scss';

const FeaturedWork = () => {
    return (
        <>
            <div className={styles.featuredWorkContainer}>
                <div className={styles.heading}>
                    <h4>Featured Works</h4>
                </div>
                <FeaturedWorkSlider />
            </div>
        </>
    )
}

export default FeaturedWork;