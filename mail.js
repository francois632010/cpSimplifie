let listenCtrl = (fatherSRank = 0, brotherSRank) => {
    document.getElementsByClassName('ad')[0].addEventListener('click', () => {
        //ajoute un ensemble textarea + bouton etc
        elt.newCpZone(0, brotherSRank);
    });
    document.getElementsByClassName('suppr')[0].addEventListener('click', () => {
        alert('ho')
    });
    document.getElementsByClassName('reg')[0].addEventListener('click', () => {
        alert('c')
    });
    document.getElementsByClassName('fct')[0].addEventListener('click', () => {
        alert('le pere noel')
    });
}
let removeCtrlMenu = elt => {
    let esc = document.getElementById('esc-btn');
    esc.addEventListener('click', () => {
      document.getElementsByClassName('ctrl')[elt].removeChild(document.getElementById('ctrl__menu'));      
      listen();
    }, false);
}



let listen = () => {
    // écoute tous les boutons contrôle
    let ctrls = document.getElementsByClassName("ctrl__btn");
    for (let elt = 0; elt < ctrls.length; elt++) {
        ctrls[elt].addEventListener('click', (e) => {
        if (!document.getElementById('ctrl__menu')) {
            console.log(e.target.classList[1])           
            document.getElementsByClassName('ctrl')[elt].appendChild(window.elt.newMenu());
            listenCtrl(0, elt);
            removeCtrlMenu(elt);
        }

        }, false);

}
}
listen();
