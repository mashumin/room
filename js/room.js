window.onload=function() {
    var room = document.querySelector(".room");

    var panl = document.querySelector(".panl");
    var widths = document.documentElement.clientWidth;
    var heights = document.documentElement.clientHeight;

    var lastpanl = document.querySelector(".panl:last-child");

    room.style.transformOrigin = "center center " + widths / 2 + "px";
    // room.style.transformOrigin="center center -300px";
    lastpanl.style.transform = " translate3d(0,0," + widths + "px) rotate3d(0,1,0,180deg)";


    var clien = document.querySelector(".panl:nth-child(5)");
    var floor = document.querySelector(".panl:nth-child(1)");
    // var diyi = document.querySelector(".panl:nth-child(3)");


    clien.style.width = clien.style.height = floor.style.width = floor.style.height = widths + "px";
    clien.style.top = -(widths - heights) + "px";

    room.style.transform = "rotate3d(0,1,0,180deg)";

var falge2=true
    lastpanl.onclick = function () {
        if(falge2){
            room.style.transition = "transform 2s ease";
            room.style.transform = "translate3d(0,0,-500px) rotate3d(0,1,0,0deg)";
            falge2=false;
        }

    }


    var angl1 = 0, angl = 0
    var falg1 = true;
    document.onmousedown = function (e) {
        flag1 = false;
        var dw = e.clientX;
        var dh = e.clientY;
        document.onmousemove = function (e) {
            flag1 = true;
            room.style.transition = "none"
            var mw = e.clientX;
            var mh = e.clientY;
            angl = Math.abs(mw - dw) > Math.abs(mh - dh) ? (mw - dw) : (mh - dh);
            e.preventDefault();
            if(!flag){
            room.style.transform = " translate3d(0,0,-500px) rotate3d(0,1,0," + (angl1 + angl) + "deg)"
            }else{
                room.style.transform=" translate3d(300px) rotateY("+(angl1+angl)+"deg)"
            }

        }
        document.onmouseup = function () {
            // alert(1)
            if (flag1) {
                angl1 += angl;
                flag1 = false;
            }
            
            document.onmousemove = null;
            document.onmouseup = null;
        }
        e.preventDefault();
    }

    var flag = false;
    var panls = document.getElementsByClassName("panl");
    for (var i = 0; i < panls.length; i++) {
        // if (i < panls.length - 1) {
            panls[i].ondblclick = function () {
                room.style.transition = "transform 2s ease";
                if (!flag) {
                    // alert(1)
                    room.style.transform = "translate3d(0,0,200px) rotate3d(0,1,0," + (angl1) + "deg)";
                    flag = true;
                } else {
                    room.style.transform = "translate3d(0,0,-500px) rotate3d(0,1,0," + (angl1) + "deg)";
                    flag = false;
                }
            // }
        }
    }




}