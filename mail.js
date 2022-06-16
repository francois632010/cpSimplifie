let build = () => {
    let storages = Object.entries(localStorage);
    let zones = storages.filter(item => parseInt(item[0])).map(item => parseInt(item[0]));
    
    for (let i of zones) {
        console.log(localStorage.getItem(i));
    }
}

let listen = () => {
    // écoute tous les boutons contrôle
    
    let ctrls = document.getElementsByClassName("ctrl__btn");
    let cps = document.getElementsByClassName("cp__btn");
    let regs = document.getElementsByClassName("reg__btn");
    
    for (let elt = 0; elt < ctrls.length; elt++) {
        ctrls[elt].addEventListener('click', (e) => {
        if (!document.getElementById('ctrl__menu')) {
            // ca ne marche pas en utilisant elt donc on crée un variable rank
            let rank = Array.from(e.target.classList).filter(i => i.match(/ctrl__btn[0-9]+/))[0].slice(9);
        
            document.getElementsByClassName(`ctrl${rank}`)[0].appendChild(window.elt.newMenu());
            ctrl.listen(rank);
            //removeCtrlMenu(elt);
        }

        }, false);
        

        cps[elt].addEventListener('click', (e) => {
            
            let rank = Array.from(e.target.classList).filter(i => i.match(/cp__btn[0-9]+/))[0].slice(7);
            copy.zone(rank);
        }, false);

    }
    
}
build();
setInterval(listen, 500)
