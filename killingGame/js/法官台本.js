var arr = ['一','二','三','四','五','六','七','八','九'];



function addLoadEvent(func){

	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;


	}else{

		window.onload = function(){

			oldonload();
			func();
		}
	}
}


