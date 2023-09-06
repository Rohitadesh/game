let element_box=document.querySelector(".elements");

let box_postion=-200;
const move=()=>{
    box_postion+=10
    // console.log(box_postion)
    element_box.style.right=`${box_postion}px`
    if(box_postion+50 == 300){
        alert("colision")
    }
}
setInterval(move,100)