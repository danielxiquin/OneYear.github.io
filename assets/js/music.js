// Selecciona los elementos
const backgroundMusic = document.getElementById('backgroundMusic');
const spotifyIframe = document.getElementById('spotifyPlayer');

// Función para pausar la música de fondo
function pauseBackgroundMusic() {
  if (!backgroundMusic.paused) {
    backgroundMusic.pause();
    console.log('Música de fondo pausada.');
  }
}

// Función para reanudar la música de fondo
function playBackgroundMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    console.log('Música de fondo reanudada.');
  }
}

// Escucha los mensajes enviados al iframe de Spotify
window.addEventListener('message', function (event) {
  const data = event.data;

  // Asegúrate de que data sea un objeto válido
  if (typeof data === 'object' && data !== null) {
    console.log('Contenido del objeto:', data);

    // Validación basada en propiedades del objeto
    if (data.type === 'playback' && data.status === 'playing') {
      pauseBackgroundMusic();
    } else if (data.type === 'playback' && data.status === 'paused') {
      playBackgroundMusic();
    }
  } else {
    console.warn('El formato de data no es un objeto válido:', data);
  }
});

// Reproduce la música de fondo al cargar la página
backgroundMusic.play();
