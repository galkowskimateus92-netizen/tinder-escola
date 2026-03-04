const perfis = [
  {
    nome: "Ana",
    bio: "Gosto de vôlei e açaí",
    foto: "https://i.pravatar.cc/300?img=5"
  },
  {
    nome: "Julia",
    bio: "Amo academia e séries",
    foto: "https://i.pravatar.cc/300?img=6"
  },
  {
    nome: "Marina",
    bio: "Fã de música e praia",
    foto: "https://i.pravatar.cc/300?img=7"
  }
];

let indice = 0;

function mostrarPerfil() {
  document.getElementById("nome").innerText = perfis[indice].nome;
  document.getElementById("bio").innerText = perfis[indice].bio;
  document.getElementById("foto").src = perfis[indice].foto;
}

function curtir() {
  indice++;
  if (indice >= perfis.length) {
    indice = 0;
  }
  mostrarPerfil();
}

mostrarPerfil();