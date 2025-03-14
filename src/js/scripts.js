const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const wave = document.querySelectorAll(".wave");

// llamado para camboar el diseño del reproductor
const contenedor = document.getElementById('audio-container');
const botonTransicion = document.getElementById('play-button');
const ver = document.getElementsByClassName("desaparecer");




botonTransicion.addEventListener('click', () => {
  contenedor.classList.add("apagar");

  for (let i = 0; i < ver.length; i++) {
    ver[i].classList.add("audio-player");
    ver[i].classList.remove("desaparecer");

  }
    // Reproducir el audio automáticamente
    if (audio.paused) {
      audio.play().catch(error => {
        console.log("Reproducción bloqueada por el navegador:", error);
      });
      
      playPauseButton.innerHTML = '<img src="https://img.icons8.com/material-rounded/24/pause.png" alt="play"></img>';
      wave.forEach((w) => {
        w.style.animationPlayState = "running";
      });
    }




});

// Formatear el tiempo en minutos y segundos
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Actualizar barra de progreso y tiempo
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;
  currentTime.textContent = formatTime(audio.currentTime);
});

// Mostrar duración total del audio
audio.addEventListener('loadedmetadata', () => {
  duration.textContent = formatTime(audio.duration);
});

// Control de reproducción y pausa
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = '<img width="24" height="24" src="https://img.icons8.com/material-rounded/24/pause.png" alt="pause"/>';
  } else {
    audio.pause();
    playPauseButton.innerHTML = '<img src="https://img.icons8.com/?size=100&id=397&format=png&color=000000" alt="play"></img>';
  }

  // Control de animación de ondas
  Array.from(wave).forEach(w => {
    w.style.animationPlayState = audio.paused ? "paused" : "running";
  });
});

// Permitir desplazamiento en la barra de progreso
seekBar.addEventListener('input', () => {
  const seekTime = (seekBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});



// Guardar el tiempo en localStorage
audio.addEventListener('timeupdate', () => {
  localStorage.setItem('audioTime', audio.currentTime);
});

// Restaurar la posición guardada al cargar la página
window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('audioTime');
  if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
  }
});

// Limpiar el tiempo cuando termine el audio
audio.addEventListener('ended', () => {
  localStorage.removeItem('audioTime');
});
