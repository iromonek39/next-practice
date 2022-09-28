/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Logo from './Logo'
import Nav from './Nav'
import { SpaceBetween } from 'styles/layout'
import Container from './Container'

const spaceBetween = css`
  ${SpaceBetween}
`

const Header = () => {
  return (
    <header>
      <Container large>
        <div css={spaceBetween}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
