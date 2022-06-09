(function () {

    let what = btn => {
        document.getElementsByClassName(btn)[0].addEventListener('click', e => {
        } )
        return false;
    }
    let addAZone = rank => {
        elt.newCpZone(rank);
    }
    let escape = (rank, Id) => {
        document.getElementsByClassName(`ctrl${rank}`)[0].removeChild(document.getElementById('ctrl__menu'));
        
        
    }
    let action = (rank, e) => {

        // pour la suite on ira chercher dans var.js toutes les regex à tester
        // et on bouclera sur ce tableau
        if (/ad/.test(e)) addAZone(rank);
        if (/esc/.test(e)) escape(rank);
        if (/suppr/.test(e)) suppr(rank);

        
    }
    let listen = rank => {
        // trop d effet de bord
        // il faut donner ctrl__menu__choice a listen() voir meme ctrlChoice
        // comme ca on peut la reutiliser pour d autres probleme
        // a la fin on aura un fichier var.js ou on ira chercher toutes les variables
        // un changement dans ce fichier ne doit pas affecter le reste du code
        // on donne aussi e.target.classList[1] a terme il faut un module de recherche dans les classList
        let ctrlChoice = document.getElementsByClassName('ctrl__menu__choice');
        for (let i = 0; i < ctrlChoice.length; i++) {
            ctrlChoice[i].addEventListener('click', e => {
                action(rank, e.target.classList[1]);
            })
        }
        
    }

    window.ctrl = {
        what: what,
        listen: listen
    }



    }
)();
