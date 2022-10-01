/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Contact = () => {
  return (
    <div
      css={css`
        & > * + * {
          margin-top: var(--stack-space, 1em);
        }
      `}
    >
      <h3
        css={css`
          font-size: var(--body);
        `}
      >
        Contact
      </h3>
      <address>cube@web.mail.address</address>
    </div>
  )
}

export default Contact
