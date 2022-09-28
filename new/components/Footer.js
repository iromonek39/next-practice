/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Logo from './Logo'
import { SideBySideCenter } from 'styles/layout'
import Container from './Container'

const sideBySideCenter = css`
  ${SideBySideCenter}
  gap: 2em;
`

const Footer = () => {
  return (
    <footer
      css={css`
        padding: var(--space-xl) 0;
        background-color: var(--gray-10);
      `}
    >
      <Container>
        <div css={sideBySideCenter}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}

export default Footer
