 
 for(var i=0 ; i < 3 ; i++ ){ //jehetu 3ta button shehetu i er khetre  0 to 2 index porjnto cholbe
    
 document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text = this.innerHTML ;                                                     //this.innerHTML bolte html er mddhe j text ta ase shetake call dewa hoyeche
    document.querySelector("h1").innerHTML = text + " is clicked";
});
 }

 //Onekgula button k jokhon event listener diye call korbo tokhon purotake loop er moddhe rekhe diye index number er jaygay var i er value boshalei hoye jabe