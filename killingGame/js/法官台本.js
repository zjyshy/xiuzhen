var arr = ["一","二","三","四","五","六","七","八","九"];
var day = document.createElement("div");



function addLoadEvent(func){

	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;


	}else{

		window.onload = function(){

			oldonload();
			func();
		};
	}
}




function main() {
	var day = sessionStorage.getItem("day");
	alert(day);

}

addLoadEvent(main);