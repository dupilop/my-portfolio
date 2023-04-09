import FeaturedWorkSlider from './featuredWorkSlider';
import styles from './styles/featuredWork.module.scss';
import recentPost from './store/recentpost.json';


const FeaturedWork = () => {
    return (
        <>
            <div className={styles.featuredWorkContainer}>
                <div className={styles.heading}>
                    <h3>Featured Works</h3>
                </div>
                {
                    recentPost.featuredWork.map((work, key) => (
                        <FeaturedWorkSlider 
                            title={work.title}
                            createYear={work.createYear}
                            category={work.category}
                            description={work.description}
                            image={work.image}
                            key={key}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default FeaturedWork;