window.onload=function(){
	var container = document.getElementById('container'),
		list = document.getElementById('list'),
		buttons = document.getElementById('buttons').getElementsByTagName('span'),
		prev = document.getElementById('prev'),
		next = document.getElementById('next'),
		index = 1,
		animated = false,
		timer;
	function showButton(){
		for(var i=0; i<buttons.length;  i++){
			if(buttons[i].className == 'on'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className='on'
	}

	function animate(offset){
		animated = true
		var newLeft = parseInt(list.style.left) + offset;
		var time = 300; //位移总时间
		var interval = 10; //位移间隔时间
		var speed = offset/(time/interval); //每次位移量

		function go(){
			if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, interval)
			}else{
				animated = false;
				list.style.left = newLeft +'px';

				if(newLeft > -600){
					list.style.left = -3000 + 'px';
				}
				if(newLeft < -3000){
					list.style.left = -600 + 'px';
				}
			}
		}
		go()
	}

	function play(){
		timer = setInterval(function(){
			next.onclick()
		}, 2000)
	}

	function stop(){
		clearInterval(timer)
	}

	next.onclick=function(){
		if(index == 5){
			index = 1;
		}else{
			index++;	
		}
		showButton();
		if(!animated){
			animate(-600);
		}
	}
	prev.onclick=function(){
		if(index == 1){
			index = 5;
		}else{
			index--;	
		}
		showButton();
		if(!animated){
			animate(600);
		}
	}

	for(var i=0; i< buttons.length; i++){
		buttons[i].onclick=function(){
			if(this.className == 'on'){
				return;
			}
			console.log(123)
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -600 * (myIndex - index);
			index = myIndex;
			animate(offset);
			showButton()
		}
	}

	container.onmouseover = stop;
	container.onmouseout = play;

	play();
}