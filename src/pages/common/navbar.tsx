import Image from "next/image";
import styles from './navbar.module.scss';

const Navbar = () => {
    const profile = '/my_pic.jpg';
    return(
        <>
            <main className={styles.main}>
                <div className={styles.firstNav}>
                    <div>
                        <h6>WHY ME</h6>
                    </div>
                    <div>
                        <h6>EDUCATION</h6>
                    </div>
                    <div>
                        <h6>EXPERIENCE</h6>
                    </div>
                </div>
                {/* <div > */}
                    <Image 
                    alt="my picture"
                    className={styles.imagePic}
                    src={profile}
                    width={180}
                    height={37}
                    priority
                    />
                {/* </div> */}
                <div className={styles.secondNav}>
                <div>
                        <h6>PROJECTS</h6>
                    </div>
                    <div>
                        <h6>ACHIEVEMENTS</h6>
                    </div>
                    <div>
                        <h6>SKILLS</h6>
                    </div>
                </div>
            </main>
        </>
    )

}

export default Navbar;