function getByClass(classname,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');
  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==classname){
      eles.push(elements[i])
    }
  }
  return eles;
}
window.onload=drag;

function drag(){
  var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
  oTitle.onmousedown=fnDown;
}
function fnDown(event){
  event = event || window.event;
  var oDrag=document.getElementById('loginPanel'),
      //按下时光标和面板间的距离
      disX=event.clientX-oDrag.offsetLeft,
      disY=event.clientY-oDrag.offsetTop;
  document.onmousemove=function(event){
    event = event || window.event;
    fnMove(event,disX,disY);
  }
}

function fnMove(e,posx,posY){
  
}