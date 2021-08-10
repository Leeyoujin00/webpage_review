//랜덤으로 위치 2개씩 뜨게 하기 
window.onload=function() {
    var E = document.getElementsByClassName("card");
    var m = E.length;
    var n = parseInt(Math.random()*m);
    var o = parseInt(Math.random()*m);
    var p = parseInt(Math.random()*m)

    while (n === o) {
       o = parseInt(Math.random()*m)
      }
    while (n === p  ||  o === p) {
        p = parseInt(Math.random()*m)
       }
    for (var i=m-1;i>=0;i--) {
    var e = E[i];
    e.style.display='none';
    }
    E[n].style.display='';
    E[o].style.display='';
    E[p].style.display='';
    }