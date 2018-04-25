var ki = parseInt(sessionStorage.getItem("killer"));
var hu = parseInt(sessionStorage.getItem('human'));
var btn = document.getElementsByTagName('button');
var sf = document.getElementsByClassName('sf');
var fp =document.getElementsByClassName('fp');
var occ = document.getElementsByClassName('occ');
var num = (ki+hu);
var a = 1;
var b = 2;
var arr = [];
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


 function shuffle () {
 	// 不是真正的洗牌算法
 	
	
	return Math.random() > num/10 ? -1 : 1;

 }

function randomArr() {
	// 将数重新排序
	

	for (var i = 0; i < num; i++) {
		arr[i] = i;
	}
		return arr.sort(shuffle);
	 
}


function setPage(c) {
	
var da = num*2-1;
	if (a%2==1 && a<da) {
			fp[0].style.display = 'none';
			sf[0].style.display = 'block';
			btn[0].lastChild.nodeValue = '隐藏并传递给'+(b);		
			console.log(c[b-2]+','+b);
			a++;
			 c[b-2] < hu ? (occ[0].lastChild.nodeValue = "平民"):(occ[0].lastChild.nodeValue='杀手');
		} else if(a%2==0 && a<da+1){
			fp[0].style.display = 'block';
			sf[0].style.display = 'none';
			btn[0].lastChild.nodeValue ='查看'+(b)+'的身份'
			console.log(c[b-2]+','+b);
			a++;
			b++;
 }else if (a==da) {
	c[b-2] < hu ? (occ[0].lastChild.nodeValue = "平民"):(occ[0].lastChild.nodeValue='杀手');

 	console.log(c[b-2]+','+b);
 	fp[0].style.display = 'none';
			sf[0].style.display = 'block';
 	btn[0].lastChild.nodeValue = '法官查看';
 	a++

 }else{
 	sessionStorage.setItem("ranArr",c);
 	window.location='JudgesDiary.html';
 }

}

 function main() {
 	
	var setNum = randomArr();
	btn[0].onclick = function () {
		
	
		setPage(setNum);
	}

	}
		


addLoadEvent(main);
	
