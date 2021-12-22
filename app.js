$(document).keydown(function (e){
    if (e.which === 65){
        console.log("la touche 'A' a etait apuyer");
        $('audio').get(0).play();
        $('div[data-key=65]').addClass('playing');
        remo();
    }
    else if (e.which === 83){
        console.log("la touche 'S' a etait apuyer");
        $('audio').get(1).play();
        $('div[data-key=83]').addClass('playing');
        remo();
    }
    else if (e.which === 68){
        console.log("la touche 'D' a etait apuyer");
        $('audio').get(2).play();
        $('div[data-key=68]').addClass('playing');
        remo();
    }
    else if (e.which === 70){
        console.log("la touche 'F' a etait apuyer");
        $('audio').get(3).play();
        $('div[data-key=70]').addClass('playing');
        remo();
    }
    else if (e.which === 71){
        console.log("la touche 'G' a etait apuyer");
        $('audio').get(4).play();
        $('div[data-key=71]').addClass('playing');
        remo();
    }
    else if (e.which === 72){
        console.log("la touche 'H' a etait apuyer");
        $('audio').get(5).play();
        $('div[data-key=72]').addClass('playing');
        remo();
    }
    else if (e.which === 74){
        console.log("la touche 'K' a etait apuyer");
        $('audio').get(6).play();
        $('div[data-key=74]').addClass('playing');
        remo();
    }
    else if (e.which === 75){
        console.log("la touche 'K' a etait apuyer");
        $('audio').get(7).play();
        $('div[data-key=75]').addClass('playing');
        remo();
    }
    else if (e.which === 76){
        console.log("la touche 'L' a etait apuyer");
        $('audio').get(8).play();
        $('div[data-key=76]').addClass('playing');
        remo();
    }
})

remo = function () {
    setTimeout(function (){
        $('div[data-key]').removeClass('playing');
    },100)
}