/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Container = ({ children, large = false }) => {
  return (
    <div
      data-size={large}
      css={css`
        &[data-size='true'] {
          width: 92%;
          max-width: 1280px;
          margin: 0 auto;
        }
        width: 92%;
        max-width: 1152px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  )
}

export default Container
