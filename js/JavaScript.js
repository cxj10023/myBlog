window.onload = function(){
		var picWrap = document.getElementById('picwrap');
		var figure = document.getElementById('picbox');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var timer = null;
		var animated = false;
		function move(offset){
			animated = true;
			var newLeft = parseInt(figure.style.left) + offset;
			var time = 300;
			var interval = 10;
			var speed = offset/(time/interval);
			function play(){
				if ((speed < 0 && parseInt(figure.style.left) > newLeft)||(speed > 0 && parseInt(figure.style.left) < newLeft)) {
					figure.style.left = parseInt(figure.style.left) + speed + 'px';
					setTimeout(play,interval);
				} else{
					animated = false;
					figure.style.left = newLeft +'px';
					if (newLeft < -1200) {
						figure.style.left = -600 +'px';
					};
					if (newLeft > -600) {
						figure.style.left = -1200 +'px';
					};
				};
			}
			play();
		}
		function go(){
			timer = setInterval(function(){
				next.onclick();
			},3000)
		}
		function stop(){
			clearInterval(timer);
		}
		next.onclick = function(){
			if (!animated) {
				move(-600);
			}
		}
		prev.onclick = function(){
			if (!animated) {
				move(600);
			}
		}
		
		picWrap.onmouseover = stop;
		picWrap.onmouseout = go;
		go();
	}



