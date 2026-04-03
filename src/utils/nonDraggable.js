export function initNonDraggable({ selector = 'img, picture, video, svg, h1' } = {}) {
  const SEL = selector;
  function set(root = document) {
    try {
      root.querySelectorAll(SEL).forEach(el => {
        try { el.setAttribute('draggable', 'false'); } catch (_) {}
      });
    } catch (_) {}
  }

  set();

  let observer = null;
  try {
    observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes || []) {
          if (node.nodeType !== 1) continue;
          const el = node;
          try {
            if (el.matches && el.matches(SEL)) {
              el.setAttribute('draggable', 'false');
            } else if (el.querySelectorAll) {
              el.querySelectorAll(SEL).forEach(n => {
                try { n.setAttribute('draggable', 'false'); } catch (_) {}
              });
            }
          } catch (_) {}
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  } catch (e) {
  }

  const dragHandler = (e) => {
    try {
      const t = e.target;
      if (t && t.matches && t.matches(SEL)) e.preventDefault();
    } catch (_) {}
  };

  document.addEventListener('dragstart', dragHandler, true);

  return {
    disconnect() {
      try { observer && observer.disconnect(); } catch (_) {}
      try { document.removeEventListener('dragstart', dragHandler, true); } catch (_) {}
    }
  };
}

export default initNonDraggable;
