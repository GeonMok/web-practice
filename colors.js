
var Body = {
    setColor: function (color) {
      //  document.querySelector('body').style.color = color;
      $('body').css("color" , color);
    },
    setBackgroundColor: function (color) {
   //     document.querySelector('body').style.backgroundColor = color;
        $('body').css("backgroundColor", color);
    }
}
var Links = {
    setColor: function(color){
/*     var links = document.querySelectorAll('a');
    var i = 0;
    while (i < links.length) {
    links[i].style.color = color;
    i += 1;
    }
 */  $('a').css("color" , color);
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