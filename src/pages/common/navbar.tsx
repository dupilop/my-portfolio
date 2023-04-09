import styles from './navbar.module.scss';
import { SiGithub, SiGmail, SiLinkedin, SiInstagram } from 'react-icons/si';

const Navbar = () => {
    return(
        <>
            <div className={styles.main}>
                {/* <div className={styles.firstNav}>
                    <div>
                        <h6>WORKS</h6>
                    </div>
                    <div>
                        <h6>EDUCATION</h6>
                    </div>
                    <div>
                        <h6>EXPERIENCE</h6>
                    </div>
                </div> */}
                {/* <div className={styles.iconNav}>
                    <h6><SiGmail /></h6>
                    <h6><SiLinkedin /></h6>
                    <h6><SiInstagram /></h6>
                    <h6><SiGithub /></h6>
                    
                </div> */}
                <div className={styles.secondNav}>
                <div>
                        <h6>WORKS</h6>
                    </div>
                    <div>
                        <h6>BLOG</h6>
                    </div>
                    <div>
                        <h6>CONTACT</h6>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;