/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'
import { SideBySideCenter } from 'styles/layout'
import cube from 'images/cube.jpg'

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
      {imageOn && (
        <figure
          css={css`
            width: 100%;
            @media and screen (min-width: 768px) {
              width: 50%;
            }
          `}
        >
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}

export default Hero
