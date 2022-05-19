(function () {

    let what = btn => {
        console.log(btn);
        document.getElementsByClassName(btn)[0].addEventListener('click', e => {
            console.log(e);
        } )
        return false;
    }
    let action = what => {

    }
    let listen = () => {
        let ctrlChoice = document.getElementsByClassName('ctrl__menu__choice');
        for (let i = 0; i < ctrlChoice.length; i++) {
            ctrlChoice[i].addEventListener('click', e => {
                console.log(e);
            })
        }
    }

    window.ctrl = {
        what: what,
        listen: listen
    }



    }
)();
