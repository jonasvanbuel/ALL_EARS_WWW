const scaleBanner = () => {
  console.log("scaleBanner triggered...");

  const height = window.innerHeight;
  const banner = document.getElementById('banner');
  banner.style.height = `${height}px`
}

window.addEventListener('load', scaleBanner);
