const image = document.querySelectorAll(".image")


document.addEventListener("mousemove",( e)=>{
  for (let i = 0; i < image.length; i++) {
    x = e.pageX;
    y = e.pageY;
    image[i].style.transform = `translate(${x}px , ${y}px)`
  }
})