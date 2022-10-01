/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const PostBody = ({ children }) => {
  return (
    <div
      css={css`
        & > * + * {
          margin-top: var(--stack-space, 1.5em);
        }
        & h2,
        h3 {
          --stack-space: 2em;
        }
        & h2 + *,
        h3 + * {
          --stack-space: 0.8em;
        }
        & p {
          line-height: 1.8;
        }
        & ul {
          padding: revert;
          list-style: revert;
        }
      `}
    >
      {children}
    </div>
  )
}

export default PostBody
