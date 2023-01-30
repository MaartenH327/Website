
function updatePF(){
  var TotalWidth = window.innerWidth
  imgobject = document.getElementById("pf")
  if(TotalWidth - 400> 0 ){
    TotalWidth -= 400
    var tja = TotalWidth*0.8
    console.log("locate image to " + tja)
  }
  else{
    var tja = TotalWidth*0.1
    console.log("locate image to " + tja)
  }


  imgobject.style.left = String(tja) + "px"

}
