/* let isPlaying = false;
const audio = document.getElementById("audioPlayer");
const waveContainer = document.querySelector(".wave-container");
const playButton = document.querySelector(".play-button");

function toggleAudio(duration, title) {
  console.log(duration, title);
    if (!isPlaying) {
        audio.play();
        console.log(audio);
        console.log(audio.dataset);
        waveContainer.style.display = "block";
        const makeTime = parseFloat((duration / 60) / 100)
        console.log(makeTime);
        time = document.createElement('time');
        if (duration) {
          time.datetime = "";
        }
          playButton.innerHTML = `
          <img src="https://img.icons8.com/?size=100&id=36268&format=png&color=000000" 
              alt="Play" width="64" height="64">
          <div>
              <h6>Escuchar audio</h6>
              <p>${audio.dataset.title || "Audio desconocido"} - ${duration ? <time ></time>  : <time> </time>}</p>
          </div>
      `;

} else {
    audio.pause();
    waveContainer.style.display = "none"; // Oculta las ondas
    playButton.innerHTML = `
    <img src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" 
        alt="Play" width="64" height="64">
    <div>
        <h6>Escuchar audio</h6>
        <p>${audio.dataset.title || "Audio desconocido"} - ${audio.dataset.duration || "0:00"}</p>
    </div>
`;
}
isPlaying = !isPlaying;
}
*/



const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

console.log(playPauseButton);


// Función para formatear el tiempo en minutos y segundos
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Actualizar la barra de progreso y el tiempo
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;
  currentTime.textContent = formatTime(audio.currentTime);
});

// Actualizar la duración total del audio
audio.addEventListener('loadedmetadata', () => {
  duration.textContent = formatTime(audio.duration);
});

// Controlar la reproducción y pausa
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});

// Permitir desplazamiento en la barra de progreso
seekBar.addEventListener('input', () => {
  const seekTime = (seekBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});