// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Lo supe cuando yo te vi entrar", time: 2 },
  { text: "Que, contigo, me ibas a llevar", time: 6 },
  { text: "Y es que voy pa' donde quieras", time: 9 },
  { text: "Hoy te doy mi vida entera, ya no tengo nada que buscar", time: 13 },
  { text: "Tus ojos, tus manos, tu risa infinita", time: 18 },
  { text: "Tu forma de amarme es mi favorita", time: 22 },
  { text: "Tus besos, por siempre, en las mañanitas", time: 26 },
  { text: "Te juro, mi amor, que yo prometo cuidarte", time: 30 },
  { text: "Con Dios de testigo", time: 34 },
  { text: "Prometo quedarme a todas contigo", time: 37 },
  { text: "Qué suerte tenerte aquí vestida de blanco", time: 42 },
  { text: "Siento que vuelo, que soy dueño de un banco", time: 46 },
  { text: "Que tengo poderes solo porque te amo", time: 50 },
  { text: "Que lo tengo todo si te tengo a mi lado", time: 54 },
  { text: "Qué suerte la mía de verte con mis ojos", time: 58 },
  { text: "Que seas tan mía y, yo, tuyo sobre todo", time: 62 },
  { text: "Que, de mil personas, escogiste a este loco", time: 66 },
  { text: "Hay Luna de miel para siempre entre nosotros", time: 70 },
  { text: "No sé si una vida va a alcanzar", time: 78 },
  { text: "Si es por mí, que sean cinco más", time: 82 },
  { text: "Pero todas a tu lado", time: 85 },
  { text: "Ay, mujer, cuanto te amo", time: 88 },
  { text: "Bésame que ya no aguanto más", time: 91 },
  { text: "Tus ojos, tus manos, tu risa infinita", time: 95 },
  { text: "Tu forma de amarme es mi favorita", time: 99 },
  { text: "Tus besos, por siempre, en las mañanitas", time: 103 },
  { text: "Te juro, mi amor, que yo prometo cuidarte", time: 107 },
  { text: "Con Dios de testigo", time: 111 },
  { text: "Prometo quedarme a todas contigo", time: 114 },
  { text: "Qué suerte tenerte aquí vestida de blanco", time: 118 },
  { text: "Siento que vuelo, que soy dueño de un banco", time: 122 },
  { text: "Que tengo poderes solo porque te amo", time: 126 },
  { text: "Que lo tengo todo si te tengo a mi lado", time: 130 },
  { text: "Qué suerte la mía de verte con mis ojos", time: 134 },
  { text: "Que seas tan mía y yo tuyo sobre todo", time: 138 },
  { text: "Que, de mil personas, escogiste a este loco", time: 142 },
  { text: "Hay Luna de miel para siempre entre nosotros", time: 146 },
  { text: "Qué suerte tenerte aquí vestida de blanco", time: 153 },
  { text: "Siento que vuelo, que soy dueño de un banco", time: 157 },
  { text: "Que tengo poderes solo porque te amo", time: 161 },
  { text: "Que lo tengo todo si te tengo a mi lado", time: 165 },
  { text: "Qué suerte la mía de verte con mis ojos", time: 169 },
  { text: "Que seas tan mía y yo tuyo sobre todo", time: 173 },
  { text: "Que, de mil personas, escogiste a este loco", time: 177 },
  { text: "Hay Luna de miel para siempre entre nosotros", time: 181 }
];
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);