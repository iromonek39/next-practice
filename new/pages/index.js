import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container>
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    </>
  )
}
