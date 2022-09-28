/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/">
      <a
        data-box-on={boxOn}
        css={css`
          &[data-box-on='true'] {
            font-size: var(--heading2);
            font-weight: 700;
            letter-spacing: 0.15em;
            display: inline-block;
            padding: 1em 2em;
            background-color: var(--gray-75);
            color: var(--white);
            font-size: var(--small-heading2);
          }
          font-size: var(--heading2);
          font-weight: 700;
          letter-spacing: 0.15em;
        `}
      >
        CUBE
      </a>
    </Link>
  )
}

export default Logo
