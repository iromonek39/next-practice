import { useRouter } from 'next/router'
import React from 'react'

const test = () => {
  const route = useRouter()
  const linkTo = () => {
    route.push('/')
  }
  return (
    <div onClick={linkTo}>
      testだよ（トップに戻るよ）
    </div>
  )
}

export default test
