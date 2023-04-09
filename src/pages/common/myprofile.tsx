import Image from 'next/image';
import styles from './myprofile.module.scss';

const MyProfile = () => {
    const profile = '/my_pic.jpg';
    const firstHeading = 'Hi, I am Abhinav,';

    return(
        <>

        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h3>{firstHeading} 
                Senior Software Developer</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className={styles.rightContainer}>
                <Image
                    alt="my picture"
                    className={styles.imagePic}
                    src={profile}
                    objectFit="contain"
                    layout="fill"
                    priority
                    />
            </div>
        </div>
        </>
    )
}

export default MyProfile;