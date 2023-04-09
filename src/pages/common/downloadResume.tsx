import styles from './downloadResume.module.scss';

const DownloadResume = () => {
    return(
        <>
            <div className={styles.download}>
                <button className={styles.downloadButton}>Download Resume</button>
            </div>
        </>
    )
}

export default DownloadResume;