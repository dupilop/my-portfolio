import styles from './navbar.module.scss';

const Navbar = () => {
    return(
        <>
            <div className={styles.main}>
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