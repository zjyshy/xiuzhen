var DN = "display:none;";
var DB = "display:block";
var arr = sessionStorage.getItem("ranArr").split(',');//将获取到的身份字符串按“，”分割转换成数组
var hu = sessionStorage.getItem('human');
var ki = sessionStorage.getItem('killer');
var body = document.getElementsByTagName("body");
var ide = document.getElementsByClassName('identity');
var kni = document.getElementsByClassName("knife");
var specificK = document.getElementsByClassName("specificK");
var specificV = document.getElementsByClassName("specificV");
var dead = '';
var flag =1;//天块中对应1，2，3，4块
var knifeFlag = 0;//控制是否点击后会出现小刀图标
var specificKFlag = -1;
var specificVFlag = -1;
var specificKContent = [];
var specificVContent = [];
var colorFlag1 = 0;
var colorFlag2 = 0;
var colorFlag3 = 0;
var colorFlag4 = 0;
//用来改变每个页面的标题
var pageType = {
    diarPage:"法官日志",
    scriptPage:"法官台本",
    killPage:"杀手杀人",
    votePage:"投票"

};


var ma = document.getElementsByTagName('main');//一共定义了两个main
//第一个用来存放玩家模块  第二个用来存放天数的模块


// 用在creatDay函数中
var days = ['一','二','三','四','五','六','七','八','九'];//将数字转换成相应的天数的汉字
var D = 0;//放入days数组来控制当前的天数
var content = "" ;//



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

function createBlock(quan)//根据身份创建块 
{
   
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









//底部按钮的行为
function clickPlay()//点击开始游戏按钮后的动作
{

    id("play").onclick = function(){
      
       
        page('scriptPage');
        showScript();
        createDay();
        id("play").style = DN;
        test();
       
      
    }
}

function clickJD()//点击法官日志按钮的动作
{
    id("JD").onclick = function(){

        showDiary();
        status();
        id("back").style =DB;
    }

}

function clickBack()//点击返回按钮的动作
{

    id("back").onclick = function(){

        id("back").style = DN;
    
    showScript();
    }
}




function clickSure(value)//杀手页面的确定按钮
{

    id("sure").onclick = function(){

       if(value==-1){
           showScript();
           id("openEyes").style = DN;
           id("sure").style = "display:DN";
           clearKnife();
           knifeFlag=0;
           showSpecificK(value);
           
           test();
       }else if(arr[value]==hu){
           confirm('自己人别开枪');
       }else if(dead.indexOf(value)==-1){
        showScript();
        dead+=value;
        knifeFlag=0;
        clearKnife();
        id("openEyes").style = DN;
           id("sure").style = "display:DN";
           showSpecificK(value);
           
           test();
       }else{
        confirm("他已经是个死人了");

       }


}
}

function clickSure2(value){
    id("sure2").onclick = function(){

        if(value==-1){
            confirm("一定要投一个出来哦");
        }else if(dead.indexOf(value)==-1){
         showScript();
         dead+=value;
         knifeFlag=0;
         clearKnife();
         id("openEyes").style = DN;
            id("sure2").style = "display:DN";
           
           
            D++;
            createDay();
            showSpecificK(specificKContent[specificKFlag]-1);//这里-1是因为在showspecificK函数中将此值加一，不减一会导致错误
            showSpecificV(value);
            color1();
            color2();
            color3();
            color4();
            colorFlag1++;
            colorFlag2++;
            colorFlag3++;
            colorFlag4++;
            flag =1;
            test();
        }else{
         confirm("他已经是个死人了");
 
        }
 
 
 }


}


//这一部分的结束









function createDay(){
   
    var inne = '<div class="dayHeader">第'+days[D]+'天</div> <section class="block"><div class="a" ><div class="line"></div><div class="kill"><img class="mo" src="img/moon.png" alt="moon"><span class="draw drawK"></span><span class="killing line1">杀手杀人</span><p class="specificK"></p></div><div class="undead"> <img class="mo" src="img/sun.png" alt="sun"><span class="draw drawG"></span><span class="ghost line1">亡灵发表遗言</span></div><div class="speak"> <span class="draw drawT"></span><span class="line2 talk">玩家依次发言</span></div><div class="vote"> <span class="draw drawV"></span><span class=" line2 toupiao">全民投票</span><p class="specificV"></p></div></div> </section> '
   content+=inne;
   ma[1].innerHTML = content;
   
   clickDay();
   
}


function page(T)//改变页面的标题
{
    
    var type = document.getElementById("pageType");
    type.innerHTML = pageType[T];
    

}

//各个页面之间的切换
function showScript(){
    //页面转换成
   
    ma[0].style = DN;
    ma[1].style = DB;
    body[0].style = 'background-color:#eee;';
    id("double").style = DB;
    
   
}


function showDiary(){

    ma[0].style = 'display:flex;';
    ma[1].style = DN;
    body[0].style = 'background-color:#29BDE0;';
    id("double").style = DN;
}

//这一块的结束






//出现小刀

function clearKnife(){
    //用来解决点击了一个人物后之前点击出现的小刀不消失的问题
    for (let i = 0; i < arr.length; i++) {
        kni[i].style = DN;
        
    }

}


function knife() {
  
   
  
     
   for(let i = 0 ;i<arr.length;i++){
        
        ide[i].onclick=function(){
            if(knifeFlag==1){
            clearKnife();

            kni[i].style = DB;
            clickSure(i);
            clickSure2(i);
                
            
        
        }
        

    }
    
    clickSure(-1);
    clickSure2(-1);

   }
   
}


//这一块的结束










//天块中的各个按钮的动作

function test(){
    var killing = document.getElementsByClassName('killing');
    var ghost = document.getElementsByClassName('ghost'); 
    var talk = document.getElementsByClassName('talk'); 
    var toupiao = document.getElementsByClassName('toupiao'); 
    var drawK = document.getElementsByClassName("drawK");
    var drawG = document.getElementsByClassName("drawG");
    var drawV = document.getElementsByClassName("drawV");
    var drawT = document.getElementsByClassName("drawT");
    
    for(let i=0;i<=D;i++){ 
        killing[i].onclick = function(){
         

            if(i==(D)){ 
                if(flag==0){
                    flag+=1;
                
                }   
                if(flag==1){
                   
                    flag++;
                    knifeFlag=1;
                    showDiary();
                    id("openEyes").style = DB;
                    id("sure").style = DB;
                    knife();
                   color1();
                    status();
                    specificKFlag++;
                }else{
                        confirm("请进行下个步骤");
                    }
            }else{

                confirm('这天已经过去咯');

            }
        }

        ghost[i].onclick = function(){
            if(i==(D)) {
            if(flag==1){
                confirm("别心急嘛");

            }else if(flag==2){
                flag++
                confirm("还有什么想说的");
               color2();
            }else{
                confirm("请进行下个步骤");
            }

        }else{

            confirm('这天已经过去咯');

        }
    }
        talk[i].onclick =function(){
            if(i==(D)) {
                if(flag<3 && flag!=0){
                    confirm("别心急嘛");
    
                }else if(flag==3 ){
                    confirm("大家商量一下");
                    color3();
                    flag++;
                }else{
                    confirm("请进行下个步骤");
                }
    
            }else{

                confirm('这天已经过去咯');

            }

        }
        toupiao[i].onclick = function(){
            
            if(i==(D)){
                if(flag<4 && flag!=0){
                    confirm("别心急嘛");


                }else if(flag==4){
                    showDiary();
                    page("votePage");
                    id("sure2").style = DB;
                    knife();
                    status();
                    knifeFlag=1;
                    flag = 0;
                   color4(); 
                   specificVFlag++;

                }else if (flag==0){
                    
                    confirm("请进行下各步骤");
                }

            }else{

                confirm('这天已经过去咯');

            }

        }
       
        
    }

}


//这一部分的结束



//显示杀人夜的细节

function showSpecificK(ST){
    specificKContent[specificKFlag]=ST+1;
   

    
    for (let n = 0; n<=specificKFlag;n++){
        if(specificKContent[n]==0){
            
        specificK[n].innerHTML="这么猖狂吗";


        }else{

            specificK[n].innerHTML="被杀死的是"+specificKContent[n]+"号";

        }
    }





}


//显示投票日的细节
function showSpecificV(SV){
    specificVContent[specificVFlag]=SV+1;
    
    for(let m =0;m<=specificVFlag;m++){
        
        specificV[m].innerHTML="投死的是"+specificVContent[m]+"号";
    }

}



//Day块点击后变色
function color1(){
    var killing = document.getElementsByClassName("killing");
    var drawK = document.getElementsByClassName("drawK");
    for(let j = 0;j<=colorFlag1;j++){

    
    killing[j].style="background:#92B7A5;";
    drawK[j].style = 'border-right: 25px solid #92B7A5;';

}
}
function color2(){
  
    var ghost = document.getElementsByClassName('ghost'); 
  
   
    var drawG = document.getElementsByClassName("drawG");
   
    for(let j = 0;j<=colorFlag2;j++){

    
        ghost[j].style="background:#92B7A5;";
    drawG[j].style = 'border-right: 25px solid #92B7A5;';

}
}
function color3(){
    var talk = document.getElementsByClassName('talk'); 
   
    var drawT = document.getElementsByClassName("drawT");
    for(let j = 0;j<=colorFlag3;j++){

    
        talk[j].style="background:#92B7A5;";
    drawT[j].style = 'border-right: 25px solid #92B7A5;';

}
}
function color4(){
    var toupiao = document.getElementsByClassName('toupiao'); 
    var drawV = document.getElementsByClassName("drawV");
    for(let j = 0;j<=colorFlag4;j++){

    
        toupiao[j].style="background:#92B7A5;";
    drawV[j].style = 'border-right: 25px solid #92B7A5;';

}
}

//渲染每个玩家此时的状态

function status(){
   var data= dead.split("");

    for(var i = 0;data.length>i;i++){
        ide[parseInt(data[i])].style = "background:#92B7A5;";
       
    }
}





function id(str){
    //避免使用id的时候每次都要重新定义
    var I = document.getElementById(str);
    return I;

}

function clickDay(){
   var blank = [];
   var a =  document.getElementsByClassName('dayHeader');
    var blo = document.getElementsByClassName('block');
    
    for(let i =0;i<a.length;i++){
        blank[i]=0;     
       
        
       
         //这里的j是因为当i进入下面的函数中的时候已经变成了i++的结果
      
        a[i].onclick = function(){
           
            if(blank[i]==0){
            blo[i].style = DN;
            blank[i]+=1;
        }else{
          
            
                blo[i].style = DB;
                blank[i]-=1;
            
        }
    } 
    
}
}



//判断胜负

function victory(){

    
}


function main() {
    
    createBlock(arr); 
    clickPlay();
    clickJD();
    clickBack();

}


addLoadEvent(main);