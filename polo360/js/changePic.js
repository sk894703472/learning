function changePic(pic){
	var source = pic.getAttribute("href");
	var picPlace = document.getElementById("pic1");
	picPlace.setAttribute("src",source);
/*	var anniu = document.getElementById("anniu");*/
	pic.style.background="url(/polo360/img/pointer-active.png)";
}
function changeButton(pic){
	pic.style.background="url(/polo360/img/pointer.png)";
}