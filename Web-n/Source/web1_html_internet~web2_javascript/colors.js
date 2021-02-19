var Links = {
    setColor: function (color) {
        // var a_tags = document.querySelectorAll('a');
        // for (var num = 0; num < a_tags.length; num++)
        //     a_tags[num].style.color = color
        $('a').css('color', color);
    }
}
var Body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        self.value = 'day';

        Links.setColor('powderblue');
        Body.setColor('white');
        Body.setBackgroundColor('black');
    }
    else {
        self.value = 'night';

        Links.setColor('black');
        Body.setColor('black');
        Body.setBackgroundColor('white');
    }
}