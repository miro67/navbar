
const toggle = document.querySelector(".nav-toggle")
const link = document.querySelector(".links")

toggle.addEventListener("click",()=>{
        // if(link.classList.contains("show-links") == false){
        //     link.classList.add("show-links")
        // }else{
        //     link.classList.remove("show-links")
        // }
    link.classList.toggle("show-links")
})