import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Teacher from '../components/teacher'
// import styles from '../styles/Home.module.css'
import styles from '../styles/HomeTest.module.css'

export default function Home() {
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

  return (
    <>
      <div>test</div>
      <div className={styles.test}>test</div>
      <button onClick={clickTest}>クリックテスト</button>
      {isClick ? <p>クリックした</p> : <p>クリックしてない</p>}
      <Teacher teacherArr={arr}/>
      {/* {arr.map((item, index) => (
        <React.Fragment key={item.id}>
          <p>{index} ---</p>
          <p>id: {item.id}</p>
          <p>教科: {item.subject}</p>
        </ React.Fragment>
      ))} */}
    </>
  )
}
