let flag = false

function myFunction (str) {//fade in out
  document.getElementById(str).parentElement.style.opacity = '0'
  if (str === 'play' || str === 'play2') {
    document.getElementById('playDiv').style.opacity= '1'
    document.getElementById('playDiv').style.zIndex= '2'
  } else {
    document.getElementById('howToDiv').style.opacity= '1'
    document.getElementById('howToDiv').style.zIndex= '1'
  }
  flag = true
}

if (flag) {
  document.getElementById('startPage').style.display = 'none'
}

function playAudio(url) {
  new Audio(url).play();
}

var timer;
var add;
let num = 3000
let score = 0
let enemy = document.getElementById('enemy')

function gameFunction () {
  enemy.style.zIndex = '2'
  if (enemy.style.opacity == 0) {
    enemy.style.opacity = 1
    let x = Math.random() * (85 - 0) + 0
    let y = Math.random() * (60 - 40) + 40
    enemy.style.left = `${x.toString()}%`
    enemy.style.top = `${y.toString()}%`
    enemy.style.backgroundImage = 'none'
  } else {
    enemy.style.opacity = 0
  }
}

enemy.addEventListener("click", scoring)
enemy.addEventListener("click", startTimer)
enemy.addEventListener("click", playAudio('url("./Smashing-Yuri_Santana-1233262689.mp3")'))

let seconds = 59

function scoring () {
  enemy.style.backgroundImage = 'url("http://pixelartmaker.com/art/daedf413619e847.png")'
  score++
  if (num > 500) {
    num -= 250
  }
  if (seconds === 0) {
    clearInterval(add)
    document.getElementById('playerScore').style.opacity = '1'
    document.getElementById('playerScore').style.zIndex = '1'
    document.getElementById('playDiv').style.opacity= '0'
    document.getElementById('playDiv').style.zIndex= '0'
    playerScore ()
  }
  document.getElementById('enemy').style.opacity = 0
  clearInterval(add)
  start()
}



function timerFunction () {
  if (seconds === 0) {
    clearInterval(timer)
    clearInterval(add)
    document.getElementById('playerScore').style.opacity = '1'
    document.getElementById('playerScore').style.zIndex = '1'
    document.getElementById('playDiv').style.opacity= '0'
    document.getElementById('playDiv').style.zIndex= '0'
    playerScore ()
  } else {
    seconds--
    document.getElementById('timer').innerHTML = `<strong>${seconds}</strong>`
  }
}

function startTimer () {
  timer = setInterval (timerFunction, 1000)
  enemy.removeEventListener("click", startTimer)
}

function start () {
  add = setInterval (gameFunction, num)
}

function playerScore () {
  document.getElementById('scoring').style.paddingTop = '-1rem'
  document.getElementById('scoring').style.fontSize = '4rem'
  let rank = ''
  if (score < 30) {
    rank = 'https://media4.giphy.com/media/WyrdDeIxGOlQA/giphy.gif'
  } else if (score < 41) {
    rank = 'http://replygif.net/i/1082.gif'
  } else {
    rank = 'https://i.gifer.com/EmJu.gif'
  }
  document.getElementById('scoring').innerHTML = `<strong>${score}</strong><br><img src=${rank}>` 
}