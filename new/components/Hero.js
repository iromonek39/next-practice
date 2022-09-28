/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { SideBySideCenter } from 'styles/layout'

const sideBySideCenter = css`
  ${SideBySideCenter}
`

const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div css={sideBySideCenter}>
      <div
        css={css`
          padding-top: calc(var(--display) * 0.5);
          padding-bottom: calc(var(--display) * 0.7);
        `}
      >
        <h1
          css={css`
            font-size: var(--display);
            font-weight: 900;
            letter-spacing: 0.15em;
          `}
        >
          {title}
        </h1>
        <p
          css={css`
            font-size: var(--small-heading2);
          `}
        >
          {subtitle}
        </p>
      </div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}

export default Hero
