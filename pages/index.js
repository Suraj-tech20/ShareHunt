import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Blogs from '../components/Blogs'
// import '../styles/style.css' // we can not import file like this in our pages but we can import bootstrap like
// css or else we use this css as global css

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* jsx style use to implement css on component as well as bolg */}
      <style jsx>{`
       .w100{
        width:100%;
       }
       h1 {
        font-size: 3em;
       }
       .w100 p {
        padding: 10px 0;
       }
      `}</style>
      <Head>
        <title>Share Hunt</title>
        <meta name="description" content="Share Hunt is website where developer share there problems and How they overcome that" />
        <meta name="keyword" content='nextjs, Share Hunt, Developers solution for developers'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* we can add script tag here but it causes slow loading so we should use script tag */}
      </Head>
      <main className={styles.main}>

        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <div className={styles.center}>
          <div className="w100">
            <h1>Share Hunt</h1>
            <Image
                src="/home.jpg"
                alt="img"
                className={styles.homeimg}
                width={168}
                height={112}
              />
            <p>A solution for the coders by the coders</p>
            <h2>Popular Blogs</h2>
            <Blogs/>
          </div>
        </div>

      </main>
    </>
  )
}
