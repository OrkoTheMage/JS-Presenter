import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Make images, media, and `h1` headings non-draggable and non-selectable
function _setUndraggableElements(root = document) {
  root.querySelectorAll('img, picture, video, svg, h1').forEach(el => {
    try { el.setAttribute('draggable', 'false'); } catch (_) {}
    try { el.style.userSelect = 'none'; } catch (_) {}
  });
}
_setUndraggableElements();
try {
  const _observer = new MutationObserver(muts => {
    for (const m of muts) {
      for (const n of m.addedNodes || []) {
        if (n.nodeType === 1) {
          try {
            if (n.matches && n.matches('img, picture, video, svg, h1')) {
              n.setAttribute('draggable', 'false');
              n.style.userSelect = 'none';
            } else if (n.querySelectorAll) {
              n.querySelectorAll('img, picture, video, svg, h1').forEach(el => {
                try { el.setAttribute('draggable', 'false'); } catch (_) {}
                try { el.style.userSelect = 'none'; } catch (_) {}
              });
            }
          } catch (_) {}
        }
      }
    }
  });
  _observer.observe(document.body, { childList: true, subtree: true });
} catch (e) {
  // MutationObserver may not be available in some envs; failure is non-fatal
}

// Prevent drag operations from starting on media and heading elements, including when text
// is already selected (covers selection-then-drag UX edge cases).
document.addEventListener('dragstart', (e) => {
  try {
    const t = e.target;
    if (t && t.matches && t.matches('img, picture, video, svg, h1')) e.preventDefault();
  } catch (_) {}
}, true);

// Block selectstart on these elements to avoid selection->drag interactions.
document.addEventListener('selectstart', (e) => {
  try {
    const t = e.target;
    if (t && t.matches && t.matches('img, picture, video, svg, h1')) e.preventDefault();
  } catch (_) {}
}, true);
