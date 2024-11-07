// MenuShow Mobile
// function MenuShow() {

//     let MenuMobile = document.querySelector('.menu-mobile'); //Seleciona o elemento principal
//     let icone = document.querySelector('.IconeMenuNav');

//     if (MenuMobile.classList.contains('open')) {
//         MenuMobile.classList.remove('open')
//         icone.classList.remove('fa-x')
//         console.log("A")
//     } else {
//         MenuMobile.classList.add('open')
//         icone.classList.add('fa-x')
//         console.log("B")
//     }
//     console.log(MenuMobile)
//     console.log(icone)

// }
//MenuShowMobile

//Fim menu mobile
let btn_menu = document.querySelector(".menu-mobile_icon");
let menu = document.querySelector(".menu-mobile");
let overlay = document.getElementById("overlay-menu")
let btn_backMenu=document.getElementById("back-menu")

console.log(btn_backMenu)

btn_menu.addEventListener("click", () => {
  menu.classList.add("open-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});

btn_backMenu.addEventListener("click", ()=>{
  menu.classList.remove("open-menu")
})


// FeedbackShow

function FedbackShow() {
  let hidden = document.querySelector(".hidden");

  if (hidden.classList.contains("FeddOpen")) {
    hidden.classList.remove("FeddOpen");
  } else {
    hidden.classList.add("FeddOpen");
  }
  console.log(hidden);
}

// Carroussel

document.addEventListener("DOMContentLoaded", function () {
  // Aguarda o carregamento completo do documento HTML

  let position = document.querySelector(".position");
  // Seleciona o elemento com a classe 'position', que vai armazenar os indicadores de posição do carrossel

  let quantidade = document.querySelectorAll(".item_slide .images");
  // Seleciona todos os elementos que possuem a classe 'images' dentro do elemento com a classe 'item_slide', representando as imagens do carrossel

  let atual = 0;
  // Inicializa a variável 'atual' com 0, indicando a imagem atualmente exibida

  let imagem = document.getElementById("atual");
  // Seleciona o elemento com o id 'atual', que corresponde à imagem atualmente visível

  let avancar = document.getElementById("avancar");
  // Seleciona o botão de avançar com o id 'avancar'

  let voltar = document.getElementById("voltar");
  // Seleciona o botão de voltar com o id 'voltar'

  let rolar = true;
  // Inicializa a variável 'rolar' com valor verdadeiro, usada para controlar o comportamento do carrossel

  for (let i = 0; i < 6; i++) {
    let div = document.createElement("div");
    // Cria um novo elemento 'div' para cada imagem do carrossel

    div.id = i;
    // Define o id do novo 'div' como o índice atual do loop

    position.appendChild(div);
    // Adiciona o 'div' recém-criado ao elemento 'position'
  }

  document.getElementById("0").classList.add("primeira");
  // Adiciona a classe 'primeira' ao primeiro indicador de posição

  let positionDIV = document.querySelectorAll(".position div");
  // Seleciona todos os 'div' dentro do elemento 'position'

  for (let i = 0; i < positionDIV.length; i++) {
    positionDIV[i].addEventListener("click", () => {
      atual = positionDIV[i].id;
      // Atualiza a variável 'atual' com o id do indicador de posição clicado

      rolar = false;
      // Define 'rolar' como falso, interrompendo o rolar automático do carrossel

      slide();
      // Chama a função 'slide' para atualizar a imagem visível
    });
  }

  voltar.addEventListener("click", () => {
    atual--;
    // Decrementa o valor de 'atual', movendo para a imagem anterior

    rolar = false;
    // Define 'rolar' como falso, interrompendo o rolar automático do carrossel

    slide();
    // Chama a função 'slide' para atualizar a imagem visível
  });

  avancar.addEventListener("click", () => {
    atual++;
    // Incrementa o valor de 'atual', movendo para a próxima imagem

    rolar = false;
    // Define 'rolar' como falso, interrompendo o rolar automático do carrossel

    slide();
    // Chama a função 'slide' para atualizar a imagem visível
  });

  function slide() {
    if (atual >= 6) {
      atual = 0;
      // Se 'atual' for maior ou igual ao número de imagens, redefine 'atual' para 0 (primeira imagem)
    } else if (atual < 0) {
      atual = 6 - 1;
      // Se 'atual' for menor que 0, redefine 'atual' para o índice da última imagem
    }

    document.querySelector(".primeira").classList.remove("primeira");
    // Remove a classe 'primeira' do indicador de posição atualmente ativo

    imagem.style.marginLeft = -350 * atual + "px";
    // Move a imagem visível ajustando a margem esquerda de acordo com o valor de 'atual'

    document.getElementById(atual).classList.add("primeira");
    // Adiciona a classe 'primeira' ao novo indicador de posição ativo
  }
});
