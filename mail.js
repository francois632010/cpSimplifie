let listenCtrl = (fatherSRank = 0, rank) => {
    /*
    document.getElementById('esc__btn').addEventListener('click', () => {
        console.log('listen esc ' + rank);
        document.getElementsByClassName(`ctrl${rank}`)[0].removeChild(document.getElementById('ctrl__menu'));
        listen();
    });
    document.getElementsByClassName('ad__btn')[0].addEventListener('click', () => {
        //ajoute un ensemble textarea + bouton etc
        console.log('listen ad ' + rank)
        elt.newCpZone(0, rank);
    });
    document.getElementsByClassName('suppr__btn')[0].addEventListener('click', () => {
        alert('ho')
    });
    document.getElementsByClassName('reg__btn')[0].addEventListener('click', () => {
        alert('c')
    });
    document.getElementsByClassName('fct__btn')[0].addEventListener('click', () => {
        alert('le pere noel')
    });
    */
    ctrl.listen();
    
}
/*
let removeCtrlMenu = elt => {
    let esc = document.getElementById('esc-btn');
    esc.addEventListener('click', () => {
      document.getElementsByClassName('ctrl')[elt].removeChild(document.getElementById('ctrl__menu'));
      listen();
    }, false);
}
*/


let listen = () => {
    // écoute tous les boutons contrôle
    let ctrls = document.getElementsByClassName("ctrl__btn");
    let cps = document.getElementsByClassName("cp__btn");
    
    for (let elt = 0; elt < ctrls.length; elt++) {
        ctrls[elt].addEventListener('click', (e) => {
        if (!document.getElementById('ctrl__menu')) {
            // ca ne marche pas en utilisant elt donc on crée un variable rank
            let rank = Array.from(e.target.classList).filter(i => i.match(/ctrl__btn[0-9]+/))[0].slice(9);
            
            document.getElementsByClassName(`ctrl${rank}`)[0].appendChild(window.elt.newMenu());
            listenCtrl(0, rank);
            //removeCtrlMenu(elt);
        }

        }, false);
        

        cps[elt].addEventListener('click', (e) => {
            
            let rank = Array.from(e.target.classList).filter(i => i.match(/cp__btn[0-9]+/))[0].slice(7);
            copy.zone(rank);
        }, false);

    }
}
listen();
