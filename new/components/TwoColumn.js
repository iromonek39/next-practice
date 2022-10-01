/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { SideBySide } from 'styles/layout'

const sideBySide = css`
  ${SideBySide}
  gap: var(--space-md);
  margin: var(--space-md) 0 var(--space-lg);
`

export const TwoColumn = ({ children }) => {
  return <div css={sideBySide}>{children}</div>
}

export const TwoColumnMain = ({ children }) => {
  return (
    <div
      css={css`
        @media (min-width: 768px) {
          width: 768px;
        }
      `}
    >
      {children}
    </div>
  )
}

export const TwoColumnSidebar = ({ children }) => {
  return (
    <div
      css={css`
        @media (min-width: 768px) {
          width: 240px;
          position: sticky;
          top: 40px;
          align-items: flex-start;

          & * {
            text-align: right;
          }

          & :is(div, ul) {
            width: fit-content;
            margin-left: auto;
            place-items: flex-end;
            place-content: flex-end;
          }
        }
      `}
    >
      {children}
    </div>
  )
}
