
// find the sections
const sections = document.querySelectorAll("section")


const addMovement = function () {

  // find out how far down the page we are

  const topViewport = window.pageYOffset

  const midViewport = topViewport + (window.innerHeight / 2)


  // lets find the middle of each section
  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    
    // how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection


    // pick the tags we want to parallax 
    // e.g. img + h2

    // select the images
    const image = section.querySelector("img")

    // select the content
    const contentTag = section.querySelector("div")

    // apply some parallax
    // use `` because we want to insert a variable into the string

    image.style.transform = `rotate(${distanceToSection}deg)`

  })
}



addMovement()


// do whenever we scroll the page

document.addEventListener("scroll", function () {

  addMovement()

})


window.addEventListener("resize", function () {

  addMovement()

})

