let images=['images/pexels-photo-67654.jpeg','images/pexels-photo-270288.jpeg','images/pexels-photo-340152.jpeg'];
let img=document.getElementById('image');
let x=0;
function slide(){
    if(x<images.length){
        x=x+1;
    }else{
        x=1;
    }
    img.innerHTML="<img src="+images[x-1]+">";
}
setInterval(slide, 3000);