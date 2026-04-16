import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      :root{
        --bp-dark: #072744;
        --bp-mid: #0b3b66;
        --bp-line: rgba(255,255,255,0.10);
        --glass-border: rgba(255,255,255,0.14);
        --glass-highlight: rgba(255,255,255,0.06);
      }

      html,body,#root{
        height:100%;
      }

      .bp-root{ position: relative; min-height: 100vh; }

      /* Blueprint paper: deep blue with subtle grid + paper grain */
      .blueprint-paper{
        position: relative;
        background-color: var(--bp-dark);
        color: #dfeeff;
        background-image:
          linear-gradient(rgba(255,255,255,0.035) 4px, transparent 4px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 4px, transparent 4px);
        background-size: 48px 48px, 48px 48px;
        background-position: center;
        overflow: hidden;
      }

      /* subtle paper grain overlay */
      .blueprint-paper::after{
        content: "";
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 2px);
        opacity: 0.6;
        pointer-events: none;
        mix-blend-mode: overlay;
      }

      /* Liquid glass effect: true frosted glass using backdrop-filter */
      .liquid-glass{
        background-color: rgba(255,255,255, 0.1);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        backdrop-filter: blur(2px);
        border-radius: 50px;
        border: 1px solid var(--glass-border);
        overflow: hidden;
      }


    `}
  />
)

export default GlobalStyles
