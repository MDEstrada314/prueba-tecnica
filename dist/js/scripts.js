let isPlaying=!1,audio=document.getElementById("audioPlayer"),waveContainer=document.querySelector(".wave-container"),playButton=document.querySelector(".play-button");function toggleAudio(){isPlaying?(audio.pause(),waveContainer.style.display="none",playButton.innerHTML=`
    <img src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" 
        alt="Play" width="64" height="64">
    <div>
        <h6>Escuchar audio</h6>
        <p>${audio.dataset.title||"Audio desconocido"} - ${audio.dataset.duration||"0:00"}</p>
    </div>
`):(audio.play(),waveContainer.style.display="block",playButton.innerHTML=`
          <img src="https://img.icons8.com/?size=100&id=36268&format=png&color=000000" 
              alt="Play" width="64" height="64">
          <div>
              <h6>Escuchar audio</h6>
              <p>${audio.dataset.title||"Audio desconocido"} - ${audio.dataset.duration||"0:00"}</p>
          </div>
      `),isPlaying=!isPlaying}function openShareWindow(t,e){let o="";t.includes("Facebook")?o="https://www.facebook.com/sharer/sharer.php?u="+decodeURIComponent(e):t.includes("Tweet")?o="https://twitter.com/intent/tweet?text="+decodeURIComponent(e):t.includes("WhatsApp")&&(o="https://wa.me/?text="+decodeURIComponent(e)),window.open(o,"_blank","width=600,height=400")}