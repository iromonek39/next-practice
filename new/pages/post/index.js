import Head from 'next/head'
import Image from 'next/image'

const EachPost = ({ title, url }) => {
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
  )
}

const Posts = () => {
  const props1 = { title: 'スケジュール管理と猫の理論', url: '/blog/schedule' }
  const props2 = { title: '音楽が呼び起こす美しいものの記憶', url: '/blog/music' }
  return (
    <section>
      <h2>おすすめの記事</h2>
      <EachPost {...props1} />
      <EachPost {...props2} />
    </section>
  )
}

export default Posts
