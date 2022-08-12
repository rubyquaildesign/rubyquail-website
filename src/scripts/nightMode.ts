type Mode = 'dark' | 'light' | 'dynamic' | undefined;
let mode: Mode = sessionStorage.getItem('mode') as Mode;
const lock = false;
const value: 'dark' | 'light' = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches
  ? 'dark'
  : 'light';

if (!mode) {
  mode = 'dynamic';
  sessionStorage.setItem('mode', mode);
}

if (document.readyState === 'complete') {
  if (mode === 'dynamic')
    document.querySelector('#lk').setAttribute('visibility', 'hidden');
  document
    .querySelector('#nm-icon')
    .setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href',
      `/icons/feather-sprite.svg#${value === 'dark' ? 'moon' : 'sun'}`,
    );
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      if (mode === 'dynamic')
        document.querySelector('#lk').setAttribute('visibility', 'hidden');
      document
        .querySelector('#nm-icon')
        .setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          `/icons/feather-sprite.svg#${value === 'dark' ? 'moon' : 'sun'}`,
        );
    }
  });
}
function mdsw(md: Mode): Mode {
  switch (md) {
    case 'dark':
      return 'light';
    case 'light':
      return 'dynamic';
    case 'dynamic':
      return 'dark';
    default:
      return 'dynamic';
  }
}

document.querySelector('#nm-switch').addEventListener('click', () => {
  mode = mdsw(mode);
  sessionStorage.setItem('mode', mode);
  let vl = mode;
  if (mode === 'dynamic') {
    vl = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    document.querySelector('#lk').setAttribute('visibility', 'hidden');
  } else document.querySelector('#lk').setAttribute('visibility', 'visible');

  document
    .querySelector('#nm-icon')
    .setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href',
      `/icons/feather-sprite.svg#${vl === 'dark' ? 'moon' : 'sun'}`,
    );
  document.body.classList.remove('dark', 'light');
  if (mode !== 'dynamic') document.body.classList.add(vl);
  return false;
});
