import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/Hero'
import styles from '../styles/Home.module.css'
import Layout from '@/components/Layout'

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
  return (
    <>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </>
  )
}
