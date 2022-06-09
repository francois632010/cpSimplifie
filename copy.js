(function () {
// tout copier d'un coup ne fonctionne pas : pourquoi --> tenter avec fonction recursive
// ou en transformant zone() en fct asynchrone --> on la relance que quand on à copier la première
// 
    let zone = rank => {
        document.getElementsByClassName(`t${rank}`)[0].select();
        document.execCommand('copy');
        return false;
    }


    window.copy = {
        zone: zone
    }



    }
)();
