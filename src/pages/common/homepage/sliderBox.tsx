import styles from './styles/sliderBox.module.scss';

interface SliderBox{
    title: string,
    dateCreated: string,
    category: string,
    description: string
}

const SliderBox: React.FC<SliderBox> = ({title, dateCreated, category, description}) => {
    return(
        <>
            <div className={styles.boxOuter}>
                
                <div className={styles.header}>
                    <h3>
                        {title}
                    </h3>
                </div>
                <div className={styles.addInfo}>
                    <h6>
                        {dateCreated}  |  {category}
                    </h6>
                </div>
                <div className={styles.description}>
                    <p>
                       {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SliderBox;