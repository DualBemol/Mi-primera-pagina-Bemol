window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

document.getElementById('menu-icon').onclick = function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

const btnLeft = document.querySelector(".derecha"),
      btnRight = document.querySelector(".izquierda"),
      slider = document.querySelector("#desliza"),
      sliderSection = document.querySelectorAll(".imagen");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   

const ctx = document.getElementById('spider').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Conflict resolution', 'Make decisions', 'Critical thinking', 'Resilience', 'Adaptation', 'Analysis capacity', 'Leadership', 'Teamwork'],
        datasets: [{
            label: 'TALENTVIEW',
            data: [80, 90, 90, 80, 90, 90, 90, 90],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'white', 
            borderWidth: 2,
            pointBackgroundColor: 'white',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'white',
        }]
    },
    options: {
        scales: {
            r: { 
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20,
                    color: 'black',
                },
                grid: {
                    color: 'white' 
                },
                angleLines: {
                    color: 'white'
                },
                pointLabels: {
                    color: 'white',
                    font: {
                        size: 14,
                        
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

