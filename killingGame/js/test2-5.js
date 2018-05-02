var days = ['一','二','三','四','五','六','七','八','九'];
var types = ['法官台本','法官日志','杀手杀人'];//页面的不同场景
var arr = sessionStorage.getItem("ranArr").split(',');
var hu = sessionStorage.getItem('human');
var ma = document.getElementsByTagName('main');
var btn = document.createElement("button");
var text = document.createTextNode("开始游戏");
var body = document.getElementsByTagName('body');
var judge = document.getElementsByTagName("main");
var i = 0;
var aaaa = ''; 

var day = 1;

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
    ma[0].appendChild(btn);
    
} 

function goDiary(){
   
     



}
function goKilling(){
    header(2);
    judge[0].style = 'display:flex;'
    judge[1].style = 'display:none;'
    body[0].style = 'background-color:#29BDE0; '
}

function goScript(){

    var inne = '<div class="day ">第'+days[i]+'天</div> <section class="block"><div class="a" ><div class="line"></div><div class="kill"><img class="mo" src="img/moon.png" alt="moon"><span class="draw"></span><span class="killing line1">杀手杀人</span></div><div class="undead"> <img class="mo" src="img/sun.png" alt="sun"><span class="draw"></span><span class=" line1">亡灵发表遗言</span></div><div class="speak"> <span class="draw"></span><span class="line2 ">玩家依次发言</span></div><div class="vote"> <span class="draw"></span><span class=" line2">全民投票</span></div></div> </section> '
    aaaa+=inne;
    judge[1].innerHTML = aaaa;
    judge[0].style = 'display:none;'
    judge[1].style = 'display:block;'
    body[0].style = 'background-color:#eee; '
    i++;
    header(0);
}


function header(type){
    var ty = document.getElementById('type');
    ty.innerHTML = types[type]; 

}

function main() {
        createBlock(arr);
    
        console.log(arr);
   
        btn.onclick = function () {
            goScript();
  
        var killing = document.getElementsByClassName("killing");
        
         killing[0].onclick = function(){
             goKilling();
          
         }
      
    }
   
       
}
addLoadEvent(main);