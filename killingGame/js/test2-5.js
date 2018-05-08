var days = ['一','二','三','四','五','六','七','八','九'];
var types = ['法官台本','法官日志','杀手杀人'];//页面的不同场景
var arr = sessionStorage.getItem("ranArr").split(',');
var hu = sessionStorage.getItem('human');
var ma = document.getElementsByTagName('main');
var btn = document.getElementsByTagName("button");
var text = document.createTextNode("开始游戏");
var body = document.getElementsByTagName('body');
var judge = document.getElementsByTagName("main");
var kni = document.getElementsByClassName("knife");
var two = document.getElementsByClassName("two");
var D = 0;
var aaaa = ''; 
var day = 1;
var flag = 0;//when you are in the killing phase and voting phase ,it is 1.
var die = ' ';
var killFlag = 0;
var killingFlag = 0;
var votaFlag = 0;
var diedFlag = 0;

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

            inne  += "<div class = 'identity'><p class='occ'>平民</p> <p class='num'>"+j+"号</p><img class='knife' src = 'img/knife.jpg'></div>";      
        }else{
            
            inne  += "<div class='identity'><p class='occ'>杀手</p> <p class='num'>"+j+"号</p><img class='knife' src = 'img/knife.jpg'></div>";      
        }
       
       j++;
    }
   
    ma[0].innerHTML = inne;
   
    
    
} 

function goDiary(){
   
     



}

function died(value){
    var sure = document.getElementById('sure');

    sure.onclick = function(){

        if(arr[value]>=hu){
        confirm("兄弟自己人啊");
            
        }else {
            judge[0].style = 'display:none;';
            judge[1].style = 'display:block;';
            body[0].style = 'background-color:#eee; ';
            two[0].style = 'display:fixed;';
            sure.style = 'display:none;';

           var kl =document.getElementsByClassName('killing')
           var draw = document.getElementsByClassName("draw");     
             kl[diedFlag].style ="background:#92B7A5;";           
           draw[diedFlag].style = 'border-right: 25px solid #92B7A5;'
           diedFlag++; 
           alert(typeof killFlag);
        }
    }
    
}

function clearKnife(){
    //用来解决点击了一个人物后之前点击出现的小刀不消失的问题
    for (let i = 0; i < arr.length; i++) {
        kni[i].style = 'display:none;';
        
    }

}

function knife(ranks) {
    var rank = ranks.length;
    var ide = document.getElementsByClassName('identity');
   if(flag==1){
     
   for(let i = 0 ;i<rank;i++){
        
        ide[i].onclick=function(){
            
            clearKnife();

            kni[i].style = 'display:block;';
           killFlag = i;
            died(i);
        
        }
        

    }
    var sure = document.getElementById('sure');

    sure.onclick = function(){

      
         
           judge[0].style = 'display:none;';
           judge[1].style = 'display:block;';
           body[0].style = 'background-color:#eee; ';
           two[0].style = 'display:fixed;';
           sure.style = 'display:none;';

          var kl =document.getElementsByClassName('killing')
          var draw = document.getElementsByClassName("draw");     
            kl[diedFlag].style ="background:#92B7A5;";           
          draw[diedFlag].style = 'border-right: 25px solid #92B7A5;'
          diedFlag++; 

        

}
}
}

function showState(){


}

function ghostTalk(){
    var ghost = document.getElementsByClassName("ghost");
    var talk = document.getElementsByClassName("talk");

    

}
function goKilling(){
    var sure = document.getElementById('sure');
   
    header(2);
    judge[0].style = 'display:flex;';
    judge[1].style = 'display:none;';
    body[0].style = 'background-color:#29BDE0; ';
    two[0].style = 'display:none;';
    sure.style = 'display:block;';

    flag=1;
   
    knife(arr);
    

}

function goScript(){

    var inne = '<div class="day ">第'+days[D]+'天</div> <section class="block"><div class="a" ><div class="line"></div><div class="kill"><img class="mo" src="img/moon.png" alt="moon"><span class="draw"></span><span class="killing line1">杀手杀人</span></div><div class="undead"> <img class="mo" src="img/sun.png" alt="sun"><span class="draw"></span><span class="ghost line1">亡灵发表遗言</span></div><div class="speak"> <span class="draw"></span><span class="line2 talk">玩家依次发言</span></div><div class="vote"> <span class="draw"></span><span class=" line2">全民投票</span></div></div> </section> '
   
    aaaa+=inne;
    judge[1].innerHTML = aaaa;
    judge[0].style = 'display:none;';
    judge[1].style = 'display:block;';
    body[0].style = 'background-color:#eee; ';
    D++;
    btn[0].style = "display:none;";
    two[0].style = 'display:block;';
    
    header(0);
}


function header(type){
    var ty = document.getElementById('type');
    ty.innerHTML = types[type]; 

}

function main() {
        createBlock(arr); 
        //创建身份块

        btn[0].onclick = function () {//btn可以直接使用是因为它是动态创建的
            goScript();//点击后页面转换为法官台本
  
        var killing = document.getElementsByClassName("killing");
        for(let i=0;i<=killFlag;i++){

        
         killing[i].onclick = function(){
             //第一步杀手杀人
            if(diedFlag==killingFlag){
              
                goKilling();
                

            }else{

                confirm('请进行下一项活动');
            }
        
        }
         }


      
    }
   
       
}
addLoadEvent(main);