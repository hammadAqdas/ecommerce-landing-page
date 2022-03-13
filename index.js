const hamIcon=document.querySelector('.cross_icon');
const sideBar=document.querySelector('.header_link_container');
const cross=document.querySelector(".cross")

if(hamIcon){
 
    hamIcon.addEventListener('click',function(e){
        e.preventDefault()
        console.log("clicked")
        if(!sideBar.classList.contains('sidebar')){
           sideBar.classList.add('sidebar');
        }
        
        
        })
        



}

if(cross){
    cross.addEventListener('click',(e)=>{
        e.preventDefault()
 console.log("cross clicked.....")
 if(sideBar.classList.contains("sidebar")){
     sideBar.classList.remove("sidebar")
 }



    })
}


window.addEventListener('resize',(e)=>{

    if(sideBar.classList.contains('sidebar')){
        sideBar.classList.remove('sidebar')
    }
})
