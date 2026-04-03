import styled from '@emotion/styled'

const IOButton = styled.button(props => `
  --size: 180px;
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;
  background: linear-gradient(180deg,#f3ecd9 0%, #e6dcc4 38%, #d4c9a8 100%);
  border: 6px solid rgba(36,36,36,0.86);
  box-shadow:
    0 6px 2px rgba(0,0,0,0.28),
    0 18px 22px rgba(0,0,0,0.36),
    0 36px 64px rgba(0,0,0,0.32),
    0 60px 120px rgba(0,0,0,0.18),
    inset 0 10px 18px rgba(255,255,255,0.85),
    inset 0 -10px 20px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: transform 140ms cubic-bezier(.2,.9,.2,1), box-shadow 140ms ease, filter 140ms ease;
  -webkit-tap-highlight-color: transparent;

  &:before {
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.04));
    pointer-events: none;
    box-shadow: inset 0 6px 14px rgba(255,255,255,0.12), inset 0 -6px 14px rgba(0,0,0,0.06);
  }

  &:after {
    content: '';
    position: absolute;
    left: 12px;
    right: 12px;
    top: 12px;
    height: 44%;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.18));
    transform: skewY(-6deg);
    mix-blend-mode: overlay;
    filter: blur(0.6px);
    pointer-events: none;
  }

  svg { width: 64px; height: 64px; filter: drop-shadow(0 3px 0 rgba(0,0,0,0.12)); }
  &:active {
    transform: translateY(6px) scale(0.988);
    box-shadow:
      0 2px 1px rgba(0,0,0,0.34),
      0 8px 10px rgba(0,0,0,0.36),
      0 20px 36px rgba(0,0,0,0.28),
      inset 0 6px 10px rgba(0,0,0,0.24);
    transition: transform 90ms ease, box-shadow 90ms ease;
  }

  ${props.pressed ? `
    transform: translateY(6px) scale(0.988);
    box-shadow:
      0 2px 1px rgba(0,0,0,0.34),
      0 8px 10px rgba(0,0,0,0.36),
      0 20px 36px rgba(0,0,0,0.28),
      inset 0 6px 10px rgba(0,0,0,0.24);
    pointer-events: none;
  ` : ''}

  &:focus { outline: none; }
`)

export default IOButton
