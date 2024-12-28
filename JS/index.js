document.querySelectorAll('.box1').forEach(box => {
  let timeout; 
  box.addEventListener('mousedown', () => {
    timeout = setTimeout(() => {
      const codeText = box.querySelector('pre').innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        }
      )
    }, 500)
  }
);
box.addEventListener('mouseup', () => {
  clearTimeout(timeout);
  }
);
box.addEventListener('mouseleave', () => {
  clearTimeout(timeout);
  }
);
box.addEventListener('touchstart', () => {
  timeout = setTimeout(() => {
    const codeText = box.querySelector('pre').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        }
      )
    }, 500)
  }
)
box.addEventListener('touchend', () => {
  clearTimeout(timeout);
      }
    )
  }
)

document.querySelectorAll('.box2').forEach(box => {
  let timeout; 
  box.addEventListener('mousedown', () => {
    timeout = setTimeout(() => {
      const codeText = box.querySelector('pre').innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        }
      )
    }, 500)
  }
);
box.addEventListener('mouseup', () => {
  clearTimeout(timeout);
  }
);
box.addEventListener('mouseleave', () => {
  clearTimeout(timeout);
  }
);
box.addEventListener('touchstart', () => {
  timeout = setTimeout(() => {
    const codeText = box.querySelector('pre').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        }
      )
    }, 500)
  }
)
box.addEventListener('touchend', () => {
  clearTimeout(timeout);
      }
    )
  }
)

document.querySelectorAll('.box3').forEach(box => {
  let timeout; 
  box.addEventListener('mousedown', () => {
    timeout = setTimeout(() => {
      const codeText = box.querySelector('pre').innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        }
      )
    }, 500)
  }
);
box.addEventListener('mouseup', () => {
  clearTimeout(timeout);
  }
);
box.addEventListener('mouseleave', () => {
  clearTimeout(timeout);
  }
);
box.addEventListener('touchstart', () => {
  timeout = setTimeout(() => {
    const codeText = box.querySelector('pre').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        }
      )
    }, 500)
  }
)
box.addEventListener('touchend', () => {
  clearTimeout(timeout);
      }
    )
  }
)
