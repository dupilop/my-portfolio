import SliderBox from './sliderBox';
import styles from './styles/recentPostSlider.module.scss';
import recentPost from './store/recentpost.json';



const RecentPostSlider = () => {
    return(
        <>
            <div className={styles.recentPost}>
                <div className={styles.recentPostInside}>
                    <div className={styles.header}>
                        <h3>Recent Post</h3>
                        <h4>View All</h4>
                    </div>
                    <div className={styles.main}>
                        {
                            recentPost.recentPost.map((post, key) => (

                                <SliderBox 
                                title={post.title}
                                dateCreated={post.dateCreated}
                                category={post.category}
                                description={post.description}
                                key={key}
                                />
                                ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default RecentPostSlider;