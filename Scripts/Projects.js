const ProjectData = [

    {
        id:"GiffyApp",
        src: ["./public/giffy05.png", 
         "./public/giffy04.png", "./public/giffy02.png" , "./public/giffy01.png"],
        title:"Giffy application",
        summary: "Social entertainment app",
        description:"This full stack app which functionality is save your favourites gifs and share them with friends",
        link: 'https://giffy-2i776knp2-sebastianac02.vercel.app/',
        repository:"https://github.com/SebastianAc02/Giffy"

    },
    {
        id:"AI",
        src: ["./public/blank_sqr.png", 
        "../public/blank_sqr.png"],
        title:"In progress",
        summary: "",
        description:"",
        link:"",
        repository:""

    },{
        id:"CppProject",
        src: ["./public/julia.jpg", 
        "../public/mandelbrot.jpg"],
        title:"Fractal Generator",
        summary: "Create fractals using oop",
        description:"This is an object oriented program. Achived working wiht other programmers, and will generate different patterns based in complex math.",
        link:"https://github.com/SebastianAc02/FractalsClasses",
        repository:"https://github.com/SebastianAc02/FractalsClasses/tree/main/htt"

    },
    {
        id:"future",
        src: ["./public/blank_sqr.png", 
        "./public/blank_sqr.png"],
        title:"In progress",
        summary: "",
        description:"",
        link:"",
        repository:""

    }


]


console.log(ProjectData)

let index = 0

let projectToDisplay 

const modal = document.querySelector('.modal')

const gotoLink = (event) =>{
    var width = window.innerWidth; 

    if(width>821)
    {return }
    

        const id = event.getAttribute('id')

     const   LinkToGo =  ProjectData.find(project => {
            return  project.id === id
          })

        window.location.href = LinkToGo?.link ;
    
    
}


const SetUp = (event) => {
   
    index = 0
    //identify which element the user wants to visualize
    const element = event.parentElement 

    
   const titleToFind  = element.getAttribute('id')

   //identifying which object is the user trying to get
   projectToDisplay = ProjectData.find(project => {
     return  project.id === titleToFind
   })


   //changing the image 
    modal.children[0].src = projectToDisplay.src[index] 

    

   const  textcontent = modal.children[2]

   const links = modal.children[3]

   //h1

   textcontent.children[0].textContent = projectToDisplay.title

   //h2
   
   textcontent.children[1].textContent = projectToDisplay.summary

   // p 

   textcontent.children[2].textContent = projectToDisplay.description


   //setting up the links



   links.children[0].href = projectToDisplay.link

   links.children[1].href = projectToDisplay.repository

   // turning the modal to true 

   modal.parentElement.style.visibility = "visible"
   
 
   



}

const closeModal = () => {
    modal.parentElement.style.visibility = "hidden"
}

const nextImg = () => {
    index += 1

    if(index > projectToDisplay.src.length - 1){
        index = 0 
     }

    modal.children[0].src = projectToDisplay.src[index] 
    console.log(index)

   
}

const prevImg = () => {
    index -= 1

    if(index < 0)
    index = projectToDisplay.src.length -1

    modal.children[0].src = projectToDisplay.src[index] 

    console.log(index)

}



