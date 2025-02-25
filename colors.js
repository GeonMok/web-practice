
var Body = {
    setColor: function (color) {
        //  document.querySelector('body').style.color = color;
        $('body').css("color", color);
    },
    setBackgroundColor: function (color) {
        //     document.querySelector('body').style.backgroundColor = color;
        $('body').css("backgroundColor", color);
    }
}
var Links = {
    setColor: function (color) {
/*     var links = document.querySelectorAll('a');
    var i = 0;
    while (i < links.length) {
    links[i].style.color = color;
    i += 1;
    }
 */  $('a').css("color", color);
    }
    , mark_current: function () {
        // window를 통해서 현재 경로, 그 중 가장 마지막 파트인 파일명을 가져 옴
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        const links = document.querySelectorAll("a");
        var i = 0; 
        while ( i < links.length){
            if (links[i].getAttribute('href') == currentPage)
                links[i].classList.add('active');
            i += 1;
        }

    }
}
function nightdayHandler(self) {
    //    var body = document.querySelector('body');
    if (self.value === 'night') {
        Body.setColor('white')
        Body.setBackgroundColor('black')
        self.value = 'day'
        Links.setColor('powderblue');
    }
    else {
        Body.setColor('black')
        Body.setBackgroundColor('beige')
        self.value = 'night'
        Links.setColor('brown');
    }
}