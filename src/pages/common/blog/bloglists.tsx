import styles from './bloglists.module.scss'

interface BlogListsClass{
    title: string;
    date: string;
    category: string;
    desc: string;
}

const Bloglists: React.FC<BlogListsClass> = ({title, date, category, desc}) => {
    return(
        <>
            <div className={styles.main}>
                <div className={styles.title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.info}>
                    <span className={styles.date}>{date}</span> | <span className={styles.category}>{category}</span>
                </div>
                <div className={styles.desc}>
                    <p>
                        {desc}    
                    </p>
                </div>
            </div>
        </>
    )
}

export default Bloglists;