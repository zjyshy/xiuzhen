var color = ['BB3844','B34FE8','FD3B83','37D23F','2ADBBE','4C0ACD','3AC434','D12395','3E0486','6895C5','89E2EA','2EC1F9','5BFE8A','A80CD7','8A7408'];
var grid = document.getElementsByTagName('div');
var btn = document.getElementsByTagName('button');
var timer = null;
window.onload = main;
function main() {
	btn[0].onclick = function(){

		clearInterval(timer);
		timer = setInterval($change,1000);
	}
	btn[1].onclick = function(){
		clearInterval(timer);
		clearColor();

	}
}



function addLoadEvent(func) {
	
		var oldonload = window.onload;
	if (typeof window.onload !='function') {
		window.onload = func;
	}else{

		window.onload = function(){
			oldonload();
			func();
		}
	}

}

function $Random(element) {
	var value = Math.floor(Math.random()*(element.length-1));
	var result = element[value];
	return result;
}//这是一个随机函数

function clearColor() {
	 for (var i = 0; i < 9; i++) {
            grid[i].style.backgroundColor = '#fea500';
        }
}
function setColor() {
	var a = '#' + $Random(color);
	return a;
}//从预设的颜色中选择一个颜色

function $change(argument) {
	var setNum = [];
	clearColor();
	for (var i = 0; i < 3; i++) {
		var randomNum = Math.floor(Math.random()*(9));
		if (setNum.indexOf(randomNum) ==-1) {

			setNum[i] = randomNum; 
			
			grid[setNum[i]].style.backgroundColor = setColor();
		}
		else{
				i--;

		}
}
}