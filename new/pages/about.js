import Contact from '@/components/Contact'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import PostBody from '@/components/PostBody'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/TwoColumn'

const About = () => {
  return (
    <>
      <Container>
        <Hero title="About" subtitle="About development" />
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>Cubeが得意</p>
              <h2>モノづくりで</h2>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  )
}

export default About
