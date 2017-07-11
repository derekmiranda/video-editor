{
  const playBtn = document.querySelector('button.play');
  const pauseBtn = document.querySelector('button.pause');
  const timeline = document.querySelector('.timeline');
  const timeInfo = document.querySelector('.timeinfo');
  const video = document.querySelector('video');

  const newline = (idx, len) => idx < len - 1 ? '\n' : '';
  const intoPixels = num => `${num}px`;

  video.addEventListener('loadeddata', () => {
    const videoWidth = video.clientWidth;
    console.log(videoWidth);
    timeline.style.width = intoPixels(videoWidth);
  })

  playBtn.addEventListener('click', () => {
    video.play();
  })

  pauseBtn.addEventListener('click', () => {
    video.pause();
  })

  timeline.addEventListener('mousemove', (event) => {
    updateInfoBox(event)
  })

  function updateInfoBox(event) {
    let msg = '';
    ['screenX', 'screenY', 'clientX', 'clientY'].forEach((item, idx, arr) => {
      msg += `${item}: ${event[item]} ${newline(idx, arr.length)}`
    })

    Object.assign(timeInfo.style, {
      display: 'block',
      top: intoPixels(event.clientY),
      left: intoPixels(event.clientX),
    })
    
    timeInfo.innerText = msg;
  }
}