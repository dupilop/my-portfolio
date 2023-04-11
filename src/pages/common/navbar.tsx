import Link from 'next/link';
import styles from './navbar.module.scss';

interface NarbarClass{
    active: string;
}

const Navbar:React.FC<NarbarClass> = ({active}) => {
    return(
        <>
            <div className={styles.main}>
                <div className={styles.firstNav}>
                    {
                        active!==''&&
                            <Link href="/">
                                ← Back to Home
                            </Link>
                    }
                </div>
                <div className={styles.secondNav}>
                    <Link href="/works">
                        <div className={active==='work'?styles.workActive:styles.work}>
                            <h6>WORKS</h6>
                        </div>
                    </Link>
                    <Link href="/blog">
                    <div className={active==='blog'?styles.blogActive:styles.blog}>
                        <h6>BLOG</h6>
                    </div>
                    </Link>
                    <div className={active==='contact'?styles.contactActive:styles.contact}>
                        <h6>CONTACT</h6>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar;