let mode: string | null = sessionStorage.getItem('mode');
if (!mode) {
  // Hasn't changed
  let query = window.matchMedia('(prefers-color-scheme: dark)');
  if (query.matches) {
    mode = 'dark'
  } else {
    mode = 'light'
  }
  sessionStorage.setItem('mode',mode)
}

if (mode === 'light') {
  document.body.className = 'light'
} else if (mode === 'dark') {
  document.body.className = 'dark'
  
}
if (document.readyState === "complete") {
  document.getElementById('nm-icon').setAttributeNS('http://www.w3.org/1999/xlink','href', `/icns/feather-sprite.svg#${mode === 'dark' ? 'moon' : 'sun'}`)
} else {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      document.getElementById('nm-icon').setAttributeNS('http://www.w3.org/1999/xlink', 'href', `/icns/feather-sprite.svg#${mode === 'dark' ? 'moon' : 'sun'}`)
    }
  }
}
const nightModeSwitch = document.getElementById('nm-switch').onclick = () => {
  console.log('boom');
  
  mode = mode === 'light' ? 'dark' : 'light';
  document.getElementById('nm-icon').setAttributeNS('http://www.w3.org/1999/xlink', 'href', `/icns/feather-sprite.svg#${mode === 'dark' ? 'moon' : 'sun'}`)
  document.body.className = mode
};
