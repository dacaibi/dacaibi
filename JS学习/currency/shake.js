
function shake(obj,attr,endFn) {
    if (obj.onOff)return;
    obj.onOff=true;
    var pos=parseInt(getStyle(obj,attr));
    var arr=[];
    var num=0;
    for ( var i=20; i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    clearInterval(obj.shake);
    obj.shake=setInterval(function () {
        obj.style[attr]=pos+arr[num]+'px';
        num++;
        if(num===arr.length){
            clearInterval(obj.shake);
            endFn&&endFn();
            obj.onOff=false;
        }
    },50)
}
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];}