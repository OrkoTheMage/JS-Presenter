import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

      :root { --bg-offwhite: #f7f1d3; }

      body {
        background-color: var(--bg-offwhite);
        font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-image: radial-gradient(circle at 20% 10%, rgba(255,247,200,0.025), transparent 20%),
          linear-gradient(180deg, rgba(255,247,200,0.025), transparent 40%);
        background-size: cover;
        color-scheme: light;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9999;
        background: radial-gradient(circle at 50% 32%,
          rgba(255,247,200,0.66) 0%,
          rgba(255,247,200,0.56) 12%,
          rgba(255,247,200,0.34) 34%,
          rgba(0,0,0,0.06) 60%,
          rgba(0,0,0,0.12) 80%,
          rgba(0,0,0,0.28) 100%);
        background-repeat: no-repeat;
        mix-blend-mode: overlay;
        filter: blur(22px) contrast(0.98) saturate(1.01);
        opacity: 0.7;
        transform: translateZ(0) scale(1.02);
        will-change: opacity, transform;
      }

      .slide-container, .deck { position: relative; }
      .slide-container::after, .deck::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        box-shadow: inset 0 80px 120px rgba(0,0,0,0.12), inset 0 -80px 120px rgba(0,0,0,0.12), inset 120px 0 200px rgba(0,0,0,0.06), inset -120px 0 200px rgba(0,0,0,0.06);
        border-radius: 6px;
      }

      .overview-preview {
        background-color: var(--bg-offwhite);
        background-image: radial-gradient(circle at 20% 10%, rgba(255,247,200,0.025), transparent 20%),
                          linear-gradient(180deg, rgba(255,247,200,0.025), transparent 40%);
        background-size: cover;
        position: relative;
        overflow: hidden;
      }
      .overview-preview::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(circle at 50% 32%,
          rgba(255,247,200,0.66) 0%,
          rgba(255,247,200,0.56) 12%,
          rgba(255,247,200,0.34) 34%,
          rgba(0,0,0,0.06) 60%,
          rgba(0,0,0,0.12) 80%,
          rgba(0,0,0,0.28) 100%);
        mix-blend-mode: overlay;
        opacity: 0.6;
        border-radius: 6px;
      }

    `}
  />
)

export default GlobalStyles
