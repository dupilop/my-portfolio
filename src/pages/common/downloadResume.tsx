import styles from './downloadResume.module.scss';

const DownloadResume = () => {
    const file = '/my_personal_resume.pdf';
    return(
        <>
            <div className={styles.download}>
            <a href={file} rel="noopener noreferrer" target="_blank">
                <button className={styles.downloadButton}>Download Resume</button>
                </a>
            </div>
        </>
    )
}

export default DownloadResume;