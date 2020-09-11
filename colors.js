var body = {
    setcolor : function(color){
        // document.querySelector('body').style.color = color;
        $("body").css("color", color)
    },
    setbackgroundcolor : function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $("body").css("background-color", color)
    }
}

var link = {
    setcolor : function(color){
    //     var a = document.querySelectorAll('a');
    //     var i = 0;
    //     while (i < a.length) {
    //         a[i].style.color = color;
    //         i += 1
    //     }
    $("a").css("color", color) //모든 a태그를 jquery로 제어한다.
    }
}

function nightDay(slef) {
    var target = document.querySelector('body');
    if (slef.value === 'night') {
        body.setbackgroundcolor('black');
        body.setcolor('white');
        link.setcolor("white")
        slef.value = 'day';
    } else {
        body.setbackgroundcolor('white');
        body.setcolor('black');
        link.setcolor("black")
        slef.value = 'night';
    }
}