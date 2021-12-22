$(document).keydown(function (e){
    if (e.which === 65){
        console.log("la touche 'A' a etait apuyer")
        let clap = $('audio[data-key=65]').src;
        this.play()
    }
    else if (e.which === 83){
        console.log("la touche 'S' a etait apuyer")
    }
    else if (e.which === 68){
        console.log("la touche 'D' a etait apuyer")
    }
    else if (e.which === 70){
        console.log("la touche 'F' a etait apuyer")
    }
    else if (e.which === 71){
        console.log("la touche 'G' a etait apuyer")
    }
    else if (e.which === 72){
        console.log("la touche 'H' a etait apuyer")
    }
    else if (e.which === 74){
        console.log("la touche 'K' a etait apuyer")
    }
    else if (e.which === 75){
        console.log("la touche 'K' a etait apuyer")
    }
    else if (e.which === 76){
        console.log("la touche 'L' a etait apuyer")
    }

})