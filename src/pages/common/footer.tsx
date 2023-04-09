import styles from './footer.module.scss';
import { SiGithub, SiGmail, SiLinkedin, SiInstagram } from 'react-icons/si';


const Footer = () => {
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.socialLink}>
                    <h6><SiGmail /></h6>
                    <h6><SiLinkedin /></h6>
                    <h6><SiInstagram /></h6>
                    <h6><SiGithub /></h6>
                </div>
                <div className={styles.copywriteText}>
                    <p>Copyright ©2020 All rights reserved </p>
                </div>

            </footer>
        </>
    )
}

export default Footer;