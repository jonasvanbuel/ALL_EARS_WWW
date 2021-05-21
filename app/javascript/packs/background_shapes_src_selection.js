const setImageSrc = () => {
  console.log("Background_shapes_src_selection pack triggered...");

  const el = document.getElementById('background-shapes-image');
  const width = window.innerWidth;
  const mobileBreakpoint = 768;
  let src = null

  // debugger

  if (width <= mobileBreakpoint) {
    src = el.dataset.mobileSrc;
  } else {
    src = el.dataset.desktopSrc;
  }

  el.style.backgroundImage = `url(${src})`;
}

window.addEventListener('load', setImageSrc);
window.addEventListener('resize', setImageSrc);



// To be externalised
const scaleBanner = () => {
  console.log("scaleBanner triggered...");

  const height = window.innerHeight;
  const banner = document.getElementById('banner');
  banner.style.height = `${height}px`
}

window.addEventListener('load', scaleBanner);
