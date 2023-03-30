+const imageInput = document.getElementById('image-input');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();
  
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  });
  
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
});
function playVideo() {
  // Obtiene el valor de la URL del video
  const videoUrl = document.getElementById('video-url').value;
  
  // Extrae el ID del video de la URL de YouTube
  const videoId = videoUrl.split('v=')[1];
  
  // Crea un objeto de configuración para la API de YouTube
  const playerOptions = {
    height: '360',
    width: '640',
    videoId: videoId,
  };
  
  // Crea un nuevo reproductor de video de YouTube
  const player = new YT.Player('player', playerOptions);
}
