(function () {

    let what = btn => {
        console.log(btn);
        document.getElementsByClassName(btn)[0].addEventListener('click', e => {
            console.log(e);
        } )
        return false;
    }
    let action = (rank, e) => {
        console.log('action');
        console.log(rank);
        console.log(e);
    }
    let listen = rank => {
        let ctrlChoice = document.getElementsByClassName('ctrl__menu__choice');
        for (let i = 0; i < ctrlChoice.length; i++) {
            ctrlChoice[i].addEventListener('click', e => {

                action(rank, e);
            })
        }
    }

    window.ctrl = {
        what: what,
        listen: listen
    }



    }
)();
