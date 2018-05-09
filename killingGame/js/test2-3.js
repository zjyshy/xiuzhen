
function a(){
	var form = document.getElementsByTagName("form")[0];
	var $input = document.getElementsByTagName("input")[0];
	var $value = Number($input.value);
	var killer = document.getElementsByClassName("kill")[0];
	var human = document.getElementsByClassName("human")[0];
	var ki = killer.childNodes[0]; 
	var hu =human.childNodes[0];
	
	if ($value<4 || $value>18) {

		ki.nodeValue = 0;
		hu.nodeValue = 0;

	}
	else if($value>3 && $value<6){
		ki.nodeValue = 1;
		hu.nodeValue = $value-1;
		
	}
	else if($value>5 && $value<9){
		ki.nodeValue = 2;
		hu.nodeValue = $value-2;
		
	}
	else if($value>8 && $value<12){
		ki.nodeValue = 3;
		hu.nodeValue = $value-3;
		
	}
	else if($value>11 && $value<16){
		ki.nodeValue = 4;
		hu.nodeValue = $value-4;

		
	}
	else if($value>15 && $value<19){
		ki.nodeValue = 5;
		hu.nodeValue = $value-5;
		
	}
}

function people(){

	var $input = document.getElementsByTagName("input")[0];
	var $value = Number($input.value);
	
	if ($value < 4) {
		confirm("人太少了怎么玩");

		

	}
	else if ( $value>18) {

		confirm("这么多人可挤不下");

	}else if( isNaN($value) )
	{
		confirm("不要输入乱七八糟的东西呀");


	}
	else if ($value>3&&$value<19) {
		var killer = document.getElementsByClassName("kill")[0];
		var human = document.getElementsByClassName("human")[0];
		var ki = killer.childNodes[0]; 
		var hu =human.childNodes[0];
	
		sessionStorage.setItem("killer",ki.nodeValue);
		sessionStorage.setItem("human",hu.nodeValue);
		window.location="showIdentity.html";

	 }
}
window.oninput = a; 
