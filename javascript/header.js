// find the header element
const headerTag = document.querySelector("header")


// when we scroll the page, at a certain point (80px)
// toggle a class to the header

// listen for a scroll 
document.addEventListener("scroll", function () {
  
  const pixels = window.pageYOffset

  // want to 'check' something - always use an if statement

  if (pixels > 80) {

    // add a class on scroll past 80 pixels

    headerTag.classList.add("scrolled")

  } else {

    headerTag.classList.remove("scrolled")
  }

  

})