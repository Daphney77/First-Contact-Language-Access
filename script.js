const audio = document.getElementById('swahili-audio');
const play = document.getElementById('play-swahili');
const status = document.getElementById('audio-status');
const identified = document.getElementById('identified-swahili');
const next = document.getElementById('next-step');
const card = document.getElementById('swahili-card');
const reset = document.getElementById('reset');

play.addEventListener('click', async () => {
  status.textContent = '';
  try {
    if (audio.readyState === 0) audio.load();
    await audio.play();
    play.textContent = '❚❚ Pause';
  } catch (e) {
    status.textContent = 'Prototype audio file not added yet. Add a verified recording as audio/swahili.mp3.';
  }
});
audio.addEventListener('pause', () => { if (!audio.ended) play.textContent = '▶ Play message'; });
audio.addEventListener('ended', () => { play.textContent = '▶ Play again'; });

identified.addEventListener('click', () => {
  audio.pause();
  card.classList.add('hidden');
  next.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
});
reset.addEventListener('click', () => {
  next.classList.add('hidden');
  card.classList.remove('hidden');
  audio.currentTime = 0;
  play.textContent = '▶ Play message';
  status.textContent = '';
});
