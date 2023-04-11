import Head from "next/head";
import Navbar from "./common/navbar";
import styles from '../styles/Blog.module.scss'
import Bloglists from "./common/blog/bloglists";
import blogs from './common/homepage/store/recentpost.json';
import Footer from "./common/footer";

const Blog = () => {
    return(
        <>
            <Head>
        <title>Abhinav Kaphle</title>
        <meta name="description" content="Abhinav Kaphle Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar active="blog"/>
        <section className={styles.section}>
            <h2>Blog</h2>
            {
                blogs.blogs.map((blog, key) => (
                    <Bloglists 
                        title={blog.title}
                        date={blog.dateCreated}
                        category={blog.category}
                        desc={blog.description}
                        key={key}
                    />
                ))
            }
        </section>
        <Footer />
      </main>
        </>
    )
}

export default Blog;