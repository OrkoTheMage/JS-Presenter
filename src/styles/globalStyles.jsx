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

      /* Clean gradient background with subtle geometric pattern */
      .blueprint-paper{
        position: relative;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        color: #e8e8e8;
        overflow: hidden;
      }

      /* Geometric accent shapes */
      .blueprint-paper::before{
        content: "";
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        pointer-events: none;
      }

      /* Subtle dot grid overlay */
      .blueprint-paper::after{
        content: "";
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 32px 32px;
        opacity: 0.8;
        pointer-events: none;
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
