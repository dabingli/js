$(window).on('load',function(){
    $(window).on("resize",function () {
        waterfall();
    });
    waterfall();
    var dataInt={"data":[{'src':'1.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'7.jpg'}]};
    $(window).on('scroll',function(){
        if(checkScrollSlide){
            $.each(dataInt.data, function(key,value){
                var oPin = $('<div>').addClass('pin').appendTo('#main');
                var oBox = $('<div>').addClass('box').appendTo(oPin);
                var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src','images/'+$(value).attr('src')).appendTo(oPic);
            })
            waterfall();
        }else{

        }
    })
})

function waterfall(){
    var $boxs = $('#main>div');
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($(window).width()/w);
    $('#main').width(w*cols).css('margin', '0 auto');
    var hArr = [];
    $boxs.each(function(index, value){
        var h=$boxs.eq(index).outerHeight();
        if(index<cols){
           hArr.push(h) 
        }else{
            var minH=Math.min.apply(null, hArr);
            var minIndex=$.inArray(minH, hArr);
            $(value).css({
                'position':'absolute',
                'top':minH+'px',
                'left':minIndex*w+'px'
            })
            hArr[minIndex]+=$boxs.eq(index).outerHeight();
        }
    })
}

function checkScrollSlide(){
    var $lastBox = $('main>div').last();
    var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var srollTop = $(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxDis<scrollTop+documentH) ? true : false
}