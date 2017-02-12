function startMove(obj,target,sty)
	{
			var timer=null;
			clearInterval(obj.timer);
			
			obj.timer=setInterval(function(){
			if(sty=="opacity")
				var aa=Math.round(parseFloat(getStyle(obj,sty))*100);
			else
				var aa=parseInt(getStyle(obj,sty));
			var speed=(target-aa)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed); 
			if(aa==target)
				clearInterval(obj.timer);
			else{
					if(sty=="opacity"){
					obj.style[sty]=(aa+speed)/100;
					obj.style[sty]="alpha(opacity:"+(aa+speed)+")";
					}
					else
					obj.style[sty]=aa+speed+"px";
				}				
		},30); 		
	}
function getStyle(obj,name)
	{
		if(obj.currentStyle)
		return obj.currentStyle[name];
		else
		return getComputedStyle(obj,false)[name];
	}