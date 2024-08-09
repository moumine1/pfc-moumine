window.addEventListener("DOMContentLoaded", run(), false);

function run(){
    var section = document.getElementsByClassName('sec');
    var show = document.getElementsByClassName('show');
    var projet = document.getElementsByClassName('projet');

    var open1 = false;
    show[0].addEventListener("click", (event) => {
        
        if (!open1){
            for (let index = 0; index < 3; index++) {
                projet[index].style.position = "relative"; 
                projet[index].style.display = "flex"; 
                projet[index].style.zIndex = "1"; 
                open1 = true
            }
        }else{
            for (let index = 0; index < 3; index++) {
                projet[index].style.position = "absolute"; 
                projet[index].style.display = "none"; 
                projet[index].style.zIndex = "-10"; 
                open1 = false
            } 
        }
      });

    var open2 = false;
    show[1].addEventListener("click", (event) => {
        
        if (!open2){
            for (let index = 3; index < 6; index++) {
                projet[index].style.position = "relative"; 
                projet[index].style.display = "flex"; 
                projet[index].style.zIndex = "1"; 
                console.log(projet[index].style)
                open2 = true
            }
        }else{
            for (let index = 3; index < 6; index++) {
                projet[index].style.position = "absolute"; 
                projet[index].style.display = "none"; 
                projet[index].style.zIndex = "-10"; 
                open2 = false
            } 
        }
      });

    var open3 = false;
    show[2].addEventListener("click", (event) => {
        
        if (!open3){
            for (let index = 6; index < 8; index++) {
                projet[index].style.position = "relative"; 
                projet[index].style.display = "flex"; 
                projet[index].style.zIndex = "1"; 
                open3 = true
            }
        }else{
            for (let index = 6; index < 8; index++) {
                projet[index].style.position = "absolute"; 
                projet[index].style.display = "none"; 
                projet[index].style.zIndex = "-10"; 
                open3 = false
            } 
        }
      });
}