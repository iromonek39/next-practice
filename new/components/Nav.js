/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul
        css={css`
          display: flex;
          gap: 2em;
        `}
      >
        <li>
          <Link href="/">
            <a
              css={css`
                @media (hover: hover) {
                  &:hover {
                    color: var(--accent);
                  }
                }
                @media (hover: none) {
                  -webkit-tap-highlight-color: transparent;
                  &:active {
                    color: var(--accent);
                  }
                }
              `}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              css={css`
                @media (hover: hover) {
                  &:hover {
                    color: var(--accent);
                  }
                }
                @media (hover: none) {
                  -webkit-tap-highlight-color: transparent;
                  &:active {
                    color: var(--accent);
                  }
                }
              `}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a
              css={css`
                @media (hover: hover) {
                  &:hover {
                    color: var(--accent);
                  }
                }
                @media (hover: none) {
                  -webkit-tap-highlight-color: transparent;
                  &:active {
                    color: var(--accent);
                  }
                }
              `}
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
