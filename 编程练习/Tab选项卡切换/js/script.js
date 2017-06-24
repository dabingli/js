function $(id){
	return typeof id === 'string' ? document.getElementById(id) : id;
}

//正长
// window.onload = function(){
// 	//获取鼠标滑过或点击的标签和要切换内容的元素
// 	var titles = $("notice-tit").getElementsByTagName('li');
// 	var divs = $('notice-con').getElementsByTagName('div');
// 	if(titles.length != divs.length){
// 		return
// 	}
// 	//遍历titles下的所有li
// 	for(var i=0;i<titles.length;i++){
// 		titles[i].id=i;
// 		titles[i].onmouseover = function(){
// 			//清除所有li上的class
// 			for(var j=0;j<titles.length;j++){
// 				titles[j].className='';
// 				divs[j].style.display='none'
// 			}
// 			//设置当前为高亮显示
// 			this.className='select';
// 			divs[this.id].style.display='block';
// 		}
// 	}

// }

// //延迟
// window.onload = function(){
// 	//标签的索引
// 	var index = 0;
// 	var timer = null;

// 	var lis = $('notice-tit').getElementsByTagName('li'),
// 		divs = $('notice-con').getElementsByTagName('div');

// 	if(lis.length != divs.length) return;

// 	//bianlisuoyoudeyeqian
// 	for(var i=0;i<lis.length;i++){
// 		lis[i].id = i;
// 		lis[i].onmouseover = function(){
// 			//用that这个变量来引用当前滑过的li
// 			var that = this;
// 			// 如果存在准备执行的定器,立刻清楚，只有当前停留时间大于500ms时才开始执行
// 			if(timer){
// 				clearTimeout(timer);
// 				timer=null;
// 			}
// 			//延迟半秒执行
// 			timer=setTimeout(function(){
// 				for(var j=0;j<lis.length;j++){
// 					lis[j].className='';
// 					divs[j].style.display='none';
// 				}
// 				lis[that.id].className='select';
// 				divs[that.id].style.display='block';
// 			},500)
// 		}
// 	}
// }


//自动切换

window.onload=function(){
	//当前高亮显示的页签的索引
	var index=0,
		timer=null
	var	lis = $('notice-tit').getElementsByTagName('li');
	var	divs = $('notice-con').getElementsByTagName('div');
	//遍历每一个页签并且给他们绑定事件
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
	    lis[i].onmouseover=function(){
	      clearInterval(timer);
	      changeOption(this.id);
	    }

		lis[i].onmouseout=function(){
			timer = setInterval(autoPlay,2000);
		}
	}

	if(timer){
		clearInterval(timer);
		timer=null;
	}
	//添加定时器，改变当前高亮的索引
	timer = setInterval(autoPlay,2000);

	function autoPlay(){
		index++;
        if(index>=lis.length){
           index=0;
        }
        changeOption(index);
	}

	function changeOption(curIndex){
		for(var j=0;j<lis.length;j++){
			lis[j].className = '';
			divs[j].style.display = 'none';
		}
		//高亮显示当前页签
		lis[curIndex].className='select';
		divs[curIndex].style.display='block';
		index = curIndex;
	}
}
