/*Name this external file gallery.js*/

function upDate(previewPic){
   /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
   const imagen=document.getElementById('image');
   imagen.style.backgroundImage="url(" + previewPic.src + ")";
   imagen.innerHTML=previewPic.alt;
	}

function unDo(){
  /* In this function you should 
 1) Update the url for the background image of the div with the id = "image" 
 back to the orginal-image.  You can use the css code to see what that original URL was
 
 2) Change the text  of the div with the id = "image" 
 back to the original text.  You can use the html code to see what that original text was
 */
   const imagen=document.getElementById('image');
   imagen.style.backgroundImage="url('')";
   imagen.innerHTML="Hover over an image below to display here";
   }

function setImages(){
   options = ["yuumei2.jpg","yuumei3.jpg",
   "yuumei4.jpg","yuumei5.jpg","yuumei6.jpg"];
   alts = ["Kiki's delivery fanart","Girl with weather balloons","Girl holding moon","Bathub and plants","Girl on a boat in a river full of stars"]
   currentImages=document.querySelectorAll(".flex img");
   for (var i=0; i <currentImages.length; i++){
      console.log("Image "+ isSecureContext )
      index=Math.floor(Math.random()*options.length)
      randomImg="img/"+ options[index];
      currentImages[i].src=randomImg
      currentImages[i].alt=alts[index]
      currentImages[i].setAttribute("tabindex", "0")
   }
   
}

function setTabIndex(){
   currentItem=document.querySelectorAll(".preview");
   for (var i=0; i<currentItem.length;i++){
      currentItem[i].setAttribute("tabindex", "0")
   }

}

function onFocus(element){
   console.log("Focused element: "+ element.alt)
   const imagen=document.getElementById('image');
   imagen.style.backgroundImage="url(" + element.src + ")";
   imagen.innerHTML=element.alt;
   
}

function onBlur() {
   const imagen=document.getElementById('image');
   imagen.style.backgroundImage="url('')";
   imagen.innerHTML="Hover over an image below to display here";
   console.log("onblur function working here")
}
