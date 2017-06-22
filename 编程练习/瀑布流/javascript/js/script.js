window.onload=function(){
	waterfall('main', 'box');
	var dataInt={"data":[{'src':'1.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'7.jpg'}]};
	window.onscroll = function(){
		if(checkScrollSlide){
			var Oparent = document.getElementById('main');
			//将数据快渲染到当前页面的尾部
			for(var i=0;i<dataInt.data.length;i++){
				var oBox = document.createElement('div');
				oBox.className = 'box';
				Oparent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main', 'box');
		}else{

		}
	}
}
function waterfall(parent, box){
	//将main下的所有的class为box的元素取出来
	var Oparent = document.getElementById(parent);
	var oBoxs = getByClass(Oparent, box);
	// var oBoxs1 = Oparent.getElementsByClassName(box);
	
	//计算整个页面显示的列数(页面宽/box的宽)
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	//设置main的宽
	Oparent.style.cssText='width:'+oBoxW*cols+'px;margin:auto;'
	var hArr = []; //存放每一列高度的数组
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null, hArr);
			var index = getMinhIndex(hArr, minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH+'px';
			// oBoxs[i].style.left = oBoxs*index+'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft+'px';
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
}
//根据Class获取元素
function getByClass(parent,clsName){
	var boxArr = [], //用来储存获取到的所有class为box元素
	    oElements = parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className == clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinhIndex(arr, val){
	for(var i in arr){
		if(arr[i] == val){
			return i
		}
	}
}
//检测是否具备了滚条加载数据块的条件
function checkScrollSlide(){
	var Oparent = document.getElementById('main');
	var oBoxs = getByClass(Oparent, 'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height) ? true : false
}