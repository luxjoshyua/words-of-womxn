const sections = document.querySelectorAll("section")

// background-colour selector
const bodyTag = document.querySelector("body")


const addMovement = function () {

  // how far down the page we are
  const topViewport = window.pageYOffset

  const midViewport = topViewport + (window.innerHeight / 2)


  // let's find the middle of each section


  // (section, index) => {}
  sections.forEach((section, index) => {

    const topSection = section.offsetTop

    const midSection = topSection + (section.offsetHeight / 2)


    // how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection


    // pick the things we want to parallax
    // pick the tags we want to parallax
    // e.g. the image and the content

    const image = section.querySelector("img")

    const contentTag = section.querySelector("div")


    // weight down this distance

    let rotation = distanceToSection / 100

    // rotate the text also

    let contentDist = -1 * distanceToSection / 2


    // for all the even sections, rotate the other way

    // is the index divisible by two 

    // is the index's remainder zero?

    // check the index
    // the modulo operator 5 % 2 = 1, 4 % 2  = 0

    if (index % 2 == 0) {

      rotation = rotation * -1

    }



    // apply some parallax

    // pick the image, apply some style, apply the specific style
    
    // use `` because we want to put some variables into the string

    // base the rotation on the distance 

    image.style.transform = `rotate(${rotation}deg)`

    contentTag.style.top = `${contentDist}`

    contentTag.style.transform = `rotate(${-1 * rotation}deg)`

    contentTag.style.transform = `rotate(${rotation}deg)`

    // check the background

    // if we've passed the middle of the section, apply a background colour

    if (distanceToSection > -100) {
      // -100 instead of 0 would change the point it kicks in on the page

      bodyTag.style.backgroundColor = "red"

    }
  })
}


addMovement()


document.addEventListener("scroll", function () {

  addMovement()

})


// because we're changing the browser size, it's on the window itself

window.addEventListener("resize", function () {

  addMovement()



})