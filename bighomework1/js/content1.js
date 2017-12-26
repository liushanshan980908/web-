function showbig(obj){
    var pic=obj.src;
    var smpics=document.getElementById('smallpic');
    var imgs=smpics.getElementsByTagName('img');
    for (var i=0; i<imgs.length ;i++ ){
        imgs[i].className='';
    };
    obj.className='pb';
    var bigpic=document.getElementById('bigpic');
    bigpic.src=pic;
}