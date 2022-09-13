const hamburguer = document.querySelector('.hamburguer')

const container = document.querySelector('.nav-items')


hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle('active')
    container.classList.toggle('active')
})


const navbar = document.querySelector('.navbar')

   
const home = document.getElementById('home-observer')

const observer = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting === false && entries[0].boundingClientRect.top < 0)
 navbar.style.position = "fixed"
  

 
})

const obser2 = new IntersectionObserver(entries =>{
if(entries[0].isIntersecting)
{
  navbar.style.position = "relative"
}
})


if(screen.width > 600)
{obser2.observe(home)
observer.observe(navbar)}



