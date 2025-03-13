let isPlaying = false;
const audio = document.getElementById("audioPlayer");
const waveContainer = document.querySelector(".wave-container");
const playButton = document.querySelector(".play-button");

function toggleAudio() {
    if (!isPlaying) {
        audio.play();
        waveContainer.style.display = "block";
   
          playButton.innerHTML = `
          <img src="https://img.icons8.com/?size=100&id=36268&format=png&color=000000" 
              alt="Play" width="64" height="64">
          <div>
              <h6>Escuchar audio</h6>
              <p>${audio.dataset.title || "Audio desconocido"} - ${audio.dataset.duration || "0:00"}</p>
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


function openShareWindow(platform, url) {
    let finalUrl = '';

    if (platform.includes('Facebook')) {
      finalUrl = `https://www.facebook.com/sharer/sharer.php?u=${decodeURIComponent(url)}`;
    } else if (platform.includes('Tweet')) {
      finalUrl = `https://twitter.com/intent/tweet?text=${decodeURIComponent(url)}`;
    } else if (platform.includes('WhatsApp')) {
      finalUrl = `https://wa.me/?text=${decodeURIComponent(url)}`;
    }

    window.open(finalUrl, '_blank', 'width=600,height=400');
  }