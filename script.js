function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("./assets/avatar.png")) {
    alt.setAttribute(
      "alt",
      "Avatar do Gabriel usando camisa social roxa listrada com gravata preta."
    )
  } else {
    alt.setAttribute("alt", "Avatar do Gabriel usando camisa laranja assustado")
  }
}
//substituir a imagem
