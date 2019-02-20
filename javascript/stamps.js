let number = 0

const stamps = [
  "assets/circles.svg",

  "assets/heart.svg",

  "assets/moon.svg",

  "assets/rainbow.svg",

  "assets/shooting-star.svg",

  "assets/waves.svg"

]


const stampsTag = document.querySelector("div.stamps")


// new function

const addStamp = function (x, y) {

  // console.log(x, y)

  // <img src="circle.svg">

  const img = document.createElement("img")

  img.setAttribute("src", stamps[number])

  // moved into the style CSS
  // img.style.position = "absolute"

  // remove half the window width so it's centered 
  img.style.left = (x - window.innerWidth / 2) + "px"

  img.style.top = y + "px"

  
  stampsTag.appendChild(img)



  // add some audio

  const audio = document.createElement("audio")

  audio.setAttribute("src", "assets/plop.mp3")

  audio.play()




  number = number + 1

  // if we run out of numbers, go back to the beginning, cycle through again

  if (number > stamps.length - 1) {

    number = 0
  }

}


document.addEventListener("click", function () {

  // console.log(event)

  addStamp(event.pageX, event.pageY)


})