var slide = ["images/tanim1.jpg","images/farhadz1.jpg","images/farhadz2.jpg"];
var imgTag = document.querySelector("img");
var count = 0;

function next(){
    count++;
    if(count >= slide.length){
        count = 0;
        imgTag.src=slide[count];
    }
    else{
    imgTag.src=slide[count];
    }
}

function prev(){
    count--;
    if(count < 0){
        count = slide.length - 1;
        imgTag.src=slide[count];
    }
    else{
    imgTag.src=slide[count];
    }
}
