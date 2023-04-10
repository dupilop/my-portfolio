import Image from 'next/image';
import styles from './myprofile.module.scss';

const MyProfile = () => {
    const profile = '/my_pic.jpg';
    const firstHeading = 'Hi, I am Abhinav,';
    const mybio = "I'm Abhinav Kaphle, a senior software developer with a strong passion for creating innovative solutions that help businesses achieve their goals. I have extensive experience working with various programming languages and technologies, and I'm always eager to learn about new tools and techniques that can improve my skills. I'm a problem solver who enjoys collaborating with other team members to deliver high-quality software solutions. When I'm not working, I love reading books, traveling, and spending time with my family."

    return(
        <>

        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h3>{firstHeading} <br />
                Software Developer</h3>
                <p>
                    {mybio}
                </p>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.innerContainer}>
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
        </div>
        </>
    )
}

export default MyProfile;