const arrows=document.querySelectorAll(".arrIcon");


arrows.forEach(function(arr){

 arr.addEventListener('click',function(e){
     const parent=e.target.closest('.arrow-wrapper').firstElementChild;
const firstElement=parent.firstElementChild;
const lastPos=parent.lastElementChild.getBoundingClientRect();
const parentWidth=e.target.closest('.arrow-wrapper').getBoundingClientRect().width;


if(e.target.classList.contains("r-arr")){

    const w=firstElement.getBoundingClientRect().width;
    const move_fac=firstElement.getBoundingClientRect().x;

  if(parentWidth<=lastPos.left){
  

firstElement.style.marginLeft=`${move_fac-w}px`;

}}


if(e.target.classList.contains('l-arr')){
    const w=firstElement.getBoundingClientRect().width;

const x=firstElement.getBoundingClientRect().x;
const firstElementLeftMargin=parent.firstElementChild.getBoundingClientRect().x;
if(Math.abs(x)<=w) {
   
    return  firstElement.style.marginLeft='0px'
}



firstElement.style.marginLeft=`${(x+w)}px`

}

 })




})