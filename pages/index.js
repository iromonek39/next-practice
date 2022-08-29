import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Teacher from '@/components/teacher'
// import styles from '../styles/Home.module.css'
import styles from '../styles/HomeTest.module.css'

export default function Home() {
  const route = useRouter()

  const [isClick, setIsClick] = useState(false)
  const arr = [
    {
      id: 1,
      subject: '国語'
    },
    {
      id: 2,
      subject: '数学'
    },
    {
      id: 3,
      subject: '体育'
    }
  ]

  const clickTest = (e) => {
    const changeIsClick = true
    setIsClick(changeIsClick)
  }

  const linkTo = () => {
    route.push('/test')
  }

  return (
    <>
      <div>test</div>
      <div className={styles.test}>test</div>
      <button onClick={clickTest}>クリックテスト</button>
      {isClick ? <p>クリックした</p> : <p>クリックしてない</p>}
      {
        arr.map((item, index) => (
          <Teacher
            {...item}
            key={index}
            // subject={item.subject}
            // id={item.id}
          >
            これがprops.childrenだ！！！
          </Teacher>
        ))
      }
      <button onClick={linkTo}>testに遷移</button>
    </>
  )
}
