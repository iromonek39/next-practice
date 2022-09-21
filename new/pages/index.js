import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const EachPost = () => {
  return (
    <article>
      <a href="post.html">
        <h3>記事のタイトル</h3>
      </a>
    </article>
  )
}

export default function Home() {
  const subtitle = 'アウトプットしていくサイト'
  return (
    <>
      <header>HEADER</header>
      <main>
        <div>
          <h1>CUBE</h1>
          <p>{subtitle}</p>
        </div>
      </main>
      <footer>FOOTER</footer>
    </>
  )
}
