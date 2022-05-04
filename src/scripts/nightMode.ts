type Mode = 'dark' | 'light' | 'dynamic' | undefined;
let mode: Mode = sessionStorage.getItem('mode') as Mode;
let lock: boolean = false;
let value: 'dark' | 'light' = window.matchMedia('(prefers-color-scheme: dark)')
  .matches
  ? 'dark'
  : 'light';

if (!mode) {
  mode = 'dynamic';
  sessionStorage.setItem('mode', mode)
}

if (document.readyState === 'complete') {
  if (mode === 'dynamic') document.getElementById('lk').setAttribute('visibility','hidden')
  document
    .getElementById('nm-icon')
    .setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href',
      `/icns/feather-sprite.svg#${value === 'dark' ? 'moon' : 'sun'}`
    );
} else {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      if (mode === 'dynamic') document.getElementById('lk').setAttribute('visibility', 'hidden');
      document
        .getElementById('nm-icon')
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          `/icns/feather-sprite.svg#${value === 'dark' ? 'moon' : 'sun'}`
        );
    }
  };
}
function mdsw(md: Mode): Mode {
  switch (md) {
    case 'dark': return 'light';
    case 'light': return 'dynamic';
    case 'dynamic': return 'dark';
    default: return 'dynamic'
  }
}
const nightModeSwitch = (document.getElementById('nm-switch').onclick = () => {
  mode = mdsw(mode);
  sessionStorage.setItem('mode', mode)
  let vl = mode;
  if (mode === 'dynamic') {
    vl = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
      : 'light';
      document.getElementById('lk').setAttribute('visibility','hidden')
  } else document.getElementById('lk').setAttribute('visibility','visible')
  document
    .getElementById('nm-icon')
    .setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href',
      `/icons/feather-sprite.svg#${vl === 'dark' ? 'moon' : 'sun'}`
  );
  document.body.classList.remove('dark','light')
  mode !== 'dynamic' && document.body.classList.add(vl)
});
