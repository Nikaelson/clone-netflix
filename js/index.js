$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    320: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    },
    2000: {
      items: 6
    }
  }
})

var assistir = document.querySelector('.botao1')
var detalhes = document.querySelector('.botao2')
var span = document.querySelector('.caixa1')
var sair = document.querySelector('.sair')

detalhes.addEventListener('click', () => {
  span.classList.add('caixa1')
  span.classList.remove('exit')
  sair.classList.remove('exit')

  var p = document.querySelector('.texto1')
  var p2 = document.querySelector('.texto2')
  var title = document.querySelector('.title')
  title.textContent = 'O Jogo da Imitação (2014)'
  p.textContent =
    'Sinopse: Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de "Enigma", enquanto ele constrói uma máquina para decifrá-las.'
  p2.textContent = '05/02/2015 (BR) História, Drama, Thriller, Guerra 1h 53m'
})

var span2 = document.querySelector('.caixa2')
assistir.addEventListener('click', () => {
  var video = document.querySelector('.video')
  adiciona(span2, 'caixa2')
  adiciona(video, 'video1')
  remove(video, 'video')
  remove(span2, 'exit')
  remove(sair2, 'exit')
})

sair.addEventListener('click', function (event) {
  if (event.target == sair) {
    adiciona(span, 'exit')
    adiciona(sair, 'exit')
  }
})
var sair2 = document.querySelector('.sair2')
sair2.addEventListener('click', function (event) {
  adiciona(span2, 'exit')
  adiciona(video, 'video')
  adiciona(sair2, 'exit')
})
function remove(tag, classe) {
  tag.classList.remove(classe)
}
function adiciona(tag, classe) {
  tag.classList.add(classe)
}

var conta = document.querySelector('.sobre-conta')
var not = document.querySelector('.notificacao')

function aparecerTexto() {
  conta.classList.remove('exit')
}
function reset() {
  conta.classList.add('exit')
}
function aparecerTexto1() {
  not.classList.remove('exit')
}
function reset1() {
  not.classList.add('exit')
}
