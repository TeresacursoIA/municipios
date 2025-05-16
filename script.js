const municipiosJaen = [
  "Albanchez de Mágina", "Alcalá la Real", "Alcaudete", "Aldeaquemada", "Andújar",
  "Arjona", "Arjonilla", "Arquillos", "Arroyo del Ojanco", "Baeza", "Bailén",
  "Baños de la Encina", "Beas de Segura", "Bedmar y Garcíez", "Begíjar",
  "Bélmez de la Moraleda", "Benatae", "Cabra del Santo Cristo", "Cambil",
  "Campillo de Arenas", "Canena", "Carboneros", "Cárcheles", "Castellar",
  "Castillo de Locubín", "Cazalilla", "Cazorla", "Chiclana de Segura",
  "Chilluévar", "Escañuela", "Espelúy", "Frailes", "Fuensanta de Martos",
  "Fuerte del Rey", "Génave", "Guarromán", "Higuera de Calatrava", "Hinojares",
  "Hornos de Segura", "Huelma", "Huesa", "Ibros", "Iznatoraf", "Jabalquinto",
  "Jaén", "Jamilena", "Jimena", "Jódar", "La Carolina", "La Guardia de Jaén",
  "Lahiguera", "La Iruela", "La Puerta de Segura", "Larva", "Linares", "Lopera",
  "Los Villares", "Lupión", "Mancha Real", "Marmolejo", "Martos", "Mengíbar",
  "Montizón", "Navas de San Juan", "Noalejo", "Orcera", "Peal de Becerro",
  "Pegalajar", "Porcuna", "Pozo Alcón", "Puente de Génave", "Quesada", "Rus",
  "Sabiote", "Santa Elena", "Santiago de Calatrava", "Santiago-Pontones",
  "Santisteban del Puerto", "Santo Tomé", "Segura de la Sierra", "Siles",
  "Sorihuela del Guadalimar", "Torreblascopedro", "Torredelcampo",
  "Torredonjimeno", "Torreperogil", "Torres", "Torres de Albanchez", "Úbeda",
  "Valdepeñas de Jaén", "Vilches", "Villacarrillo", "Villanueva de la Reina",
  "Villanueva del Arzobispo", "Villardompardo", "Villarrodrigo", "Villatorres"
];

// Normaliza texto (quita tildes y pone minúsculas)
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Carga la lista de municipios en el datalist para autocompletar

function cargarAutocompletado() {
  const datalist = document.getElementById("lista-municipios");
  municipiosJaen.forEach(municipio => {
    const option = document.createElement("option");
    option.value = municipio;
    datalist.appendChild(option);
  });
}

// Ejecutar carga autocompletado al cargar la página
window.addEventListener("DOMContentLoaded", cargarAutocompletado);

document.getElementById("municipio-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const input = normalizar(document.getElementById("municipio").value.trim());
  const resultado = document.getElementById("resultado");
  const sonidoCorrecto = document.getElementById("sound-correct");
  const sonidoError = document.getElementById("sound-wrong");

  const encontrado = municipiosJaen.some(
    m => normalizar(m) === input
  );

  if (encontrado) {
  resultado.textContent = "✅ El municipio pertenece a la provincia de Jaén.";
  resultado.style.color = "green";
  sonidoCorrecto.currentTime = 0;
  sonidoCorrecto.play();
} else {
  resultado.textContent = "❌ El municipio NO pertenece a la provincia de Jaén.";
  resultado.style.color = "red";
  sonidoError.currentTime = 0;
  sonidoError.play();
}

});

document.getElementById("municipio-form").addEventListener("reset", function() {
  document.getElementById("resultado").textContent = "";
});
