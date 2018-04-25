var arr = sessionStorage.getItem("ranArr").split(',');
var hu = sessionStorage.getItem('human');
var ma = document.getElementsByTagName('main');
var btn=document.createElement("button");
var text = document.createTextNode("开始游戏");
var body = document.getElementsByTagName('body');

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

function createBlock(quan) {
    var inne = " ";
    var j = 1;
    for (let i = 0; i < quan.length; i++) {
        if(quan[i]<hu){

            inne  += "<div><p class='occ'>平民</p> <p class='num'>"+j+"号</p></div>";      
        }else{
            
            inne  += "<div><p class='occ'>杀手</p> <p class='num'>"+j+"号</p></div>";      
        }
       
       j++;
    }
   
    ma[0].innerHTML = inne;
    btn.appendChild(text);
    body[0].appendChild(btn);
    
}

function main() {
    
    
   createBlock(arr);
    
   console.log(arr);
    btn.onclick = function () {
        window.location='JudgeScript.html'

    }


}
addLoadEvent(main);